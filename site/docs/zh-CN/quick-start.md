## 快速上手

### 安装
命令工具安装：npm --registry=http://registry.npm.intra.317hu.com/ install npm-317hu -g

然后，使用 npm317 的方式安装组件：

```bash
npm317 i @317hu/* --save
```

### 命名规则
1. （形式 + 作用）|操作
2. 由于publish时，包名称不支持？？中横杠字符，可以使用驼峰形式
3. README 内容（组件使用说明）简要规则：

<pre>
* 组件标题名 + 版本标识（版本链接）
* 组件概述文字（无抬头）
* 使用示例、演示
* API（表格形式）
* API注释说明段落
* 代码演示区，支持在线编辑、预览
</pre>

### 主题
引用组件开始之前, 你可能还需要一个主题样式包, 这里我们推荐使用`@317hu-theme-default`.

```shell
npm317 install @317hu-theme-default --save
```

### 使用

```bash
# 一次完整的初始代码拉取审核仓库的操作：
$ cd /src/@317hu
 
$ git clone ssh://galaxyw@fe.317hu.com:29418/editor135qiniu.git
 
$ git remote add gerrit ssh://galaxyw@fe.317hu.com:29418/editor135qiniu.git
 
$ scp -P 29418 -p fe.317hu.com:/hooks/commit-msg .git/hooks
 
$ npm install
 
galaxyw: editor135qiniu (master) $ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
 
    modified:   README.md
 
no changes added to commit (use "git add" and/or "git commit -a")
galaxyw: editor135qiniu (master) $ git add .
galaxyw: editor135qiniu (master) $ git commit
Aborting commit due to empty commit message.
galaxyw: editor135qiniu (master) $ git commit
[master 213ea6a] 更新 组件描述内容
 1 file changed, 32 insertions(+)
galaxyw: editor135qiniu (master) $ git review
remote:
remote: Processing changes: new: 1, refs: 1 (\)       
remote: Processing changes: new: 1, refs: 1 (\)       
remote: Processing changes: new: 1, refs: 1 (\)       
remote: Processing changes: new: 1, refs: 1, done           
remote:
remote: New Changes:       
remote:   http://gerrit.intra.317hu.com/56 更新 组件描述内容       
remote:
To ssh://galaxyw@fe.317hu.com:29418/editor135qiniu.git
 * [new branch]      HEAD -> refs/publish/master
galaxyw: editor135qiniu (master) $

```
