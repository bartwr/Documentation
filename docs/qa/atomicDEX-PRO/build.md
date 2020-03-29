# Build Instructions for AtomicDEX Desktop

## Ubuntu 16.04

### Dependencies

- Install the Open Source version of QT from here: [https://www.qt.io/download](https://www.qt.io/download). You might need to create an account :(
  - You will be prompted to selected the version of QT software to install. Choose the latest version and note its number (Example: `5.14.1`)
  - Add the following environment variables to your `~/.bashrc` or `~/.zshrc` files

Example:

```bash
export QT_INSTALL_CMAKE_PATH=~/Qt/5.14.0/gcc/lib/cmake # QT_INSTALL_CMAKE_PATH equal to the CMake QT path
export QT_ROOT=~/Qt/5.14.0 # QT_ROOT equal to the QT root installation folder
```

or

```bash
export QT_INSTALL_CMAKE_PATH=~/Qt/5.14.1/gcc_64/lib/cmake/
export QT_ROOT=~/Qt/5.14.1
```

You have to look at your QT installation and set the above variables. It changes based on version/system architecture etc.,

- Install the latest version of [CMake](https://cmake.org/download/) (3.14 minimum)

```bash
cd ~
curl https://github.com/Kitware/CMake/releases/download/v3.16.5/cmake-3.16.5-Linux-x86_64.sh
chmod +x cmake-3.16.5-Linux-x86_64.sh
./cmake-3.16.5-Linux-x86_64.sh
```

- Install the latest version of `clang` (clang-8 minimum)

```bash
wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key | sudo apt-key add -
sudo apt-add-repository "deb http://apt.llvm.org/xenial/ llvm-toolchain-xenial main"
sudo apt-get update
sudo apt-get install -y clang-9
```

Set the recently installed clang version to be used

```bash
sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-9 100
sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-9 100
```

- Install the latest version of `nim` and its tools

```bash
curl https://nim-lang.org/choosenim/init.sh -sSf | sh
```

Take note of the response and follow the instructions there to add a string similar to `export PATH=/home/<username>/.nimble/bin:$PATH` to the end of your `~/.bashrc` or `~/.zshrc` files

- Install other dependencies

```bash
sudo apt-get install -y ninja-build git
wget https://apt.llvm.org/llvm.sh
chmod +x llvm.sh
sudo ./llvm.sh 9
```

### Download and Build

```bash
git clone https://github.com/KomodoPlatform/atomicDEX-Pro
cd atomicDEX-Pro/atomic_qt/ci_tools_atomic_dex
nimble build
./ci_tools_atomic_dex build debug  # debug version
./ci_tools_atomic_dex build release # release version
```