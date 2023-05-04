import shelljs from 'shelljs'

function generateStaticFiles() {
    shelljs.exec('npm run build')
}

function copyAssets() {
    shelljs.cp('CNAME', './dist')
}   

function deploySurge() {
    shelljs.exec('surge ./dist')
}

function build() {
    generateStaticFiles()
    copyAssets()
    deploySurge()
}

build()
