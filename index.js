'use strict';

// url samples
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

module.exports = function (str) {
    var matched = _find(str);

    if (!matched) {
        return null;
    }

    var key = _clean(matched[0]);

    var urls = {
        repo: 'https://github.com/' + key,
        https: 'https://github.com/' + key + '.git',
        ssh: 'git@github.com:' + key + '.git',
        git: 'git://github.com/' + key + '.git'
    };

    return urls;

};


function _find(str) {
    var m;

    // name/repo
    // Regex taken from https://github.com/npm/npm-package-arg/commit/01dce583c64afae07b66a2a8a6033aeba871c3cd

    m = /^[^@%\/\s\.-][^:@%\/\s]*\/[^@\s\/%]+(?:#.*)?$/.exec(str);

    if (m) {
        return m;
    }

    // https://www.npmjs.org/doc/files/package.json.html#Git-URLs-as-Dependencies
    m = /^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?(github.com)[:\/]([^\/]+\/[^\/]+?|[0-9]+)$/.exec(str);

    if (m) {
        return m.slice(2);
    }

    // download link
    m = /^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?(github.com)\/([\w-]+\/[\w-.]+)\/archive\/(.+)\..+?$/.exec(str);

    if (m) {
        return m.slice(2);
    }

    return null;
}

function _clean(str) {
    return str.trim().replace(/\.git/, '').replace(/(#.*)/, '');
}
