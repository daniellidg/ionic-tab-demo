/**
 * Created by BAB1600764 on 8/6/2019.
 */
let fs = require('fs');
let path = require('path');

const TARGET_DIR = 'www';

module.exports = function (ctx) {
  console.log('=====================');
  console.log('attaching source maps');
  console.log('=====================');

  let files = fs.readdirSync(TARGET_DIR);

  files.forEach(file => {
    let mapFile = path.join(TARGET_DIR, file + '.map');
  let targetFile = path.join(TARGET_DIR, file);
  if (path.extname(file) === '.js' && fs.existsSync(mapFile)) {
    let bufMap = fs.readFileSync(mapFile).toString('base64');
    let bufFile = fs.readFileSync(targetFile, "utf8");
    let result = bufFile.replace('sourceMappingURL=' + file + '.map', 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + bufMap);
    fs.writeFileSync(targetFile, result);
  }
});
};