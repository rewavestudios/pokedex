# pokedex

## About

A command-line Pokédex built with TypeScript that fetches data from the PokéAPI.

## Overview

This project is a command-line interface (CLI) tool that allows users to look up information about Pokémon characters. It functions as a digital [Pokédex](https://pokeapi.co/), providing details such as names, types, stats, and other characteristics of Pokémon.

## Features

- Fetch Pokémon data from the PokéAPI
- Search for Pokémon by name or ID
- Display detailed information including:
  - Basic info (name, ID, height, weight)
  - Types
  - Base stats
  - Abilities
- Command-line REPL interface for interactive use
- Caching mechanism for improved performance

## 💻 Install

Install [NVM](https://github.com/nvm-sh/nvm) (preferred way to manage Node.js versions in this Project).
Use the following cURL or Wget command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Check to make sure you've activated the correct version of node by typing:

```bash
node --version
# Prints: v22.15.0
```

If you get error `bash: /usr/bin/node: No such file or directory`, run this command to load `nvm` script:

```bash
source ~/.bashrc
```

Check that the `nvm` command is recognized:

```bash
nvm --version
```

You should see a version number (like 0.40.3). Now that `nvm` is working, tell it to install and use the version specified in `.nvmrc`.
This command reads the `.nvmrc` file and installs the version it finds there:

```bash
nvm install
```

Check that the correct versino is active:

```bash
node --version
```