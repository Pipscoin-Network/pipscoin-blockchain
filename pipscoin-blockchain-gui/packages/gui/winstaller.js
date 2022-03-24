const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('Creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    name: "pipscoin-blockchain",
    appDirectory: path.join(rootPath, 'Pipscoin-win32-x64'),
    authors: 'Pipscoin Network',
    version: process.env.PIPSCOIN_INSTALLER_VERSION,
    noMsi: true,
    iconUrl: 'https://raw.githubusercontent.com/Pipscoin-Network/pipscoin-blockchain/master/electron-react/src/assets/img/pipscoin.ico',
    outputDirectory: path.join(outPath, 'windows-installer'),
    certificateFile: 'win_code_sign_cert.p12',
    certificatePassword: process.env.WIN_CODE_SIGN_PASS,
    exe: 'Pipscoin.exe',
    setupExe: 'PipscoinSetup-' + process.env.PIPSCOIN_INSTALLER_VERSION + '.exe',
    setupIcon: path.join(rootPath, 'src', 'assets', 'img', 'pipscoin.ico')
  })
}
