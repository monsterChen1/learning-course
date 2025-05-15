// 导入fs模块
import fs from 'fs';

// 判断文件是否存在
fs.access('./data/student.txt', err => {
    if(err){
        console.log('文件不存在');
    }else{
        console.log('文件存在');

        // 向文件中写入内容
        fs.writeFile('./data/student.txt', 'studentsss', err => {
            if(err){
                console.log('写入失败!');
            }else{
                console.log('写入成功!');

                // 读取文件内容
                fs.readFile('./data/student.txt', (err, data) => {
                    if(err){
                        console.log('文件读取失败!');
                    }else{
                        console.log('文件读取成功!');
                        console.log(data.toString());
                    }
                });
            }
        });
    }
});






