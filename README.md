# github-url-analyzer
[![NPM version](https://img.shields.io/npm/v/github-url-analyzer.svg?style=flat)](https://www.npmjs.org/package/github-url-analyzer)

analyze srting to github urls

## Installation

```bash
$ npm install github-url-analyzer
```

## Usage
```js
var analyzer = require('github-url-analyzer');

console.log(analyzer(str));

// str can be one of these:

// 'user/project',
// 'git://github.com/user/project#commit-ish',
// 'git://github.com/user/project.git#commit-ish',
// 'https://github.com/user/project#commit-ish',
// 'https://github.com/user/project.git',
// 'git+ssh://github.com/user/project.git',
// 'git+http://user@github.com/project/blah.git#commit-ish',
// 'git+https://user@github.com/project/blah.git#commit-ish',
// 'git@github.com:user/project.git',
// 'git@github.com:user/project.git#commit-ish'
// 'https://github.com/user/project/archive/v0.2.2.zip',
// 'https://github.com/user/project/archive/v0.2.2.tar.gz'
```

eg.

```js
var analyzer = require('github-url-analyzer');

console.log(analyzer('lisposter/github-url-analyzer'));

// { 
//     repo: 'https://github.com/lisposter/github-url-analyzer',
//     https: 'https://github.com/lisposter/github-url-analyzer.git',
//     ssh: 'git@github.com:lisposter/github-url-analyzer.git',
//     git: 'git://github.com/lisposter/github-url-analyzer.git' 
// }
```

## License

MIT © [Leigh Zhu](#)
