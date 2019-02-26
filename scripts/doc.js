#!/usr/bin/env node

'use strict';

const debug = require('debug')('mail-sc:documents:builder');
const path = require('path');
const fs = require('fs').promises;
const {existsSync} = require('fs');

const SCHEMA_DIR = path.join(__dirname, '../lib/schemas/');
const OUTPUT = path.join(__dirname, '../docs/contents.md');

const getModuleName = function(filename) {
  return {
    'deliveries.js': 'delivery',
    'address.list.js': 'addressList',
    'email.template.js': 'template',
    'email.label.js': 'emailLabel',
  }[filename];
};

const builder = async function() {
  const schemas = [];
  const directories = await fs.readdir(SCHEMA_DIR);
  debug('directories %j', directories);
  for (const filename of directories) {
    try {
      const absolutePath = path.join(SCHEMA_DIR, filename);
      debug('require(%s)', absolutePath);
      schemas.push({content: require(absolutePath), moduleName: getModuleName(filename)});
    } catch (e) {
      console.error(e);
    }
  }

  let contents = '#### SendCloud\n';
  // for (const schemaObject of schemas) {
  //   const schema = schemaObject.content;
  //   for (const key in schema) {
  //     if (!schema.hasOwnProperty(key)) continue;
  //     const helper = `[${schema[key].desc}](${schema[key].doc})`;
  //     contents += `+ **.${key}(Object)}**\t-\t${helper}\n`;
  //   }
  // }
  
  contents += '\n\n#### Aliases\n';
  for (const schemaObject of schemas) {
    const schema = schemaObject.content;
    const moduleName = schemaObject.moduleName;
    for (const key in schema) {
      if (!schema.hasOwnProperty(key)) continue;
      const helper = `[${schema[key].desc}](${schema[key].doc})`;
      contents += `+ **${moduleName}.${schema[key].alias}(Object)** - ${helper}\n`;
    }
  }

  await fs.writeFile(OUTPUT, contents, {encoding: 'utf8'});
  if (!existsSync(OUTPUT)) {
    console.error(new Error('Saving documents error.'));
    process.exit(1);
  }

  console.info('Saving documents success.');
  process.exit(0);
};

const executable = function() {
  const version = process.versions.node;
  const arr = version.split('.');
  if (~~arr[0] < 10) {
    console.error('The doc.js need Node.js version > v10.*.*');
    process.exit(1);
  }

  return true;
};

executable();
builder();
