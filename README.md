# 稀土教程 beta

掘金社区共创教程，欢迎大家一起添加学习内容，共同进步！

网站还未正式发布，测试地址：https://xitu.github.io/courses/

## 如何共建内容？

**fork本项目，在`src/docs`目录下创建`Markdown`或者`MDX`文档，然后提交PR即可！**

## 如何一起改进平台

项目基于[docz](https://github.com/doczjs/docz) (虽然docz仍有一些坑，但是足够强大，且扩展性良好）

可以在`src/components`目录下添加`React`组件，用于你的文章中。

如果能一起优化`docz`和`gatsby`就更好了，现在在dev环境中编译调试有较多的问题，希望大家一起帮忙逐一解决。

希望这个开源项目能打造出一个面向技术初学者的伟大的文档平台！

## TODO

- [ ] 制定mdx文件名与name的建议规范，写一个检查menu下的文件中是否存在配置name重复的脚本，如果有重复，解决冲突并生成displayName
- [ ] 待进一步优化Gatsby的编译性能

## License

Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg