// const fs = require('fs');
// const path = require('path');

// const operation = process.argv[2];
// const fileName = process.argv[3];
// const newFileName = process.argv[4];
// const content = process.argv[4];

// switch (operation) {
//   case 'read':
//     readFile(fileName);
//     break;
//   case 'create':
//     createFile(fileName);
//     break;
//   case 'append':
//     appendToFile(fileName, content);
//     break;
//   case 'delete':
//     deleteFile(fileName);
//     break;
//   case 'rename':
//     renameFile(fileName, newFileName);
//     break;
//   case 'list':
//     listFiles();
//     break;
//   default:
//     console.log('Invalid operation!');
// }

// function readFile(fileName) {
//   if (!fileName) {
//     return console.log('Please provide a file name.');
//   }
//   fs.readFile(fileName, 'utf8', (err, data) => {
//     if (err) {
//       console.error(`Error reading file: ${err}`);
//     } else {
//       console.log(data);
//     }
//   });
// }

// function createFile(fileName) {
//   if (!fileName) {
//     return console.log('Please provide a file name.');
//   }
//   fs.writeFile(fileName, '', (err) => {
//     if (err) {
//       console.error(`Error creating file: ${err}`);
//     } else {
//       console.log(`File '${fileName}' created!`);
//     }
//   });
// }

// function appendToFile(fileName, content) {
//   if (!fileName || !content) {
//     return console.log('Please provide a file name and content.');
//   }
//   fs.appendFile(fileName, content + '\n', (err) => {
//     if (err) {
//       console.error(`Error appending to file: ${err}`);
//     } else {
//       console.log(`Content appended to file '${fileName}'!`);
//     }
//   });
// }

// function deleteFile(fileName) {
//   if (!fileName) {
//     return console.log('Please provide a file name.');
//   }
//   fs.unlink(fileName, (err) => {
//     if (err) {
//       console.error(`Error deleting file: ${err}`);
//     } else {
//       console.log(`File '${fileName}' deleted!`);
//     }
//   });
// }

// function renameFile(oldName, newName) {
//   if (!oldName || !newName) {
//     return console.log('Please provide the old and new file names.');
//   }
//   fs.rename(oldName, newName, (err) => {
//     if (err) {
//       console.error(`Error renaming file: ${err}`);
//     } else {
//       console.log(`File renamed from '${oldName}' to '${newName}'!`);
//     }
//   });
// }

// function listFiles() {
//   fs.readdir('.', (err, files) => {
//     if (err) {
//       console.error(`Error listing files: ${err}`);
//     } else {
//       files.forEach(file => {
//         console.log(file);
//       });
//     }
//   });
// }



const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const operation = args[0];
const fileName = args[1];
const newName = args[2];
const content = args.slice(2).join(' ');

if (args.length === 0) {
    console.log('Usage: node index.js <operation> <arguments>');
    console.log('Operations:');
    console.log('  read <file>');
    console.log('  create <file>');
    console.log('  append <file> <content>');
    console.log('  delete <file>');
    console.log('  rename <oldFile> <newFile>');
    console.log('  list');
}

function showError(message) {
    console.log(`Error: ${message}`);
    process.exit(1);
}

switch (operation) {
    case 'read':
        if (!fileName) showError('File name is required for reading');
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) showError(err.message);
            console.log(data);
        });
        break;

    case 'create':
        if (!fileName) showError('File name is required for creating');
        fs.writeFile(fileName, '', (err) => {
            if (err) showError(err.message);
            console.log(`File '${fileName}' created`);
        });
        break;

    case 'append':
        if (!fileName || !content) showError('File name and content are required for appending');
        fs.appendFile(fileName, content + '\n', (err) => {
            if (err) showError(err.message);
            console.log(`Content appended to the file '${fileName}'`);
        });
        break;

    case 'delete':
        if (!fileName) showError('File name is required for deleting');
        fs.unlink(fileName, (err) => {
            if (err) showError(err.message);
            console.log(`File '${fileName}' deleted`);
        });
        break;

    case 'rename':
        if (!fileName || !newName) showError('Old name and new name are required for renaming');
        fs.rename(fileName, newName, (err) => {
            if (err) showError(err.message);
            console.log(`File '${fileName}' renamed to '${newName}'`);
        });
        break;

    case 'list':
        fs.readdir('.', (err, files) => {
            if (err) showError(err.message);
            files.forEach(file => {
                console.log(file);
            });
        });
        break;

    default:
        showError('Invalid operation. Use one of the following: read, create, append, delete, rename, list');
}


