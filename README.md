# CatwebWriter

Transpiling Lua/Python like code into CatWeb JSON!

To use this, download the zip file for the current version, then extract the contents, open it in **LIVE SERVER, BECAUSE WEB BROWSERS DO NOT ALLOW MODULES TO BE CALLED IN THE OS DIRECTORY** using Visual Studio Code or other IDEs and enjoy!

## Documentation

### I. INTRODUCTION

This language was created for a Roblox game called [CatWeb](https://www.roblox.com/games/16855862021/CatWeb-Make-a-Website), to make **complex CatWeb sites** much easier. CatWeb was not intended for complex sites, so you will struggle when making them. To fix this,
I made a new language, CatVB (Catweb Visual Basic). Like Visual Basic which made programming software in Windows much easier, CatVB makes programming sites in CatWeb much easier.

This also allows AI to be trained to help in making CatVB code much easier, as instead of block or JSON based coding, it is now text based.

### II. BASIC SYNTAX
#### DATA TYPES

CatVB has basically only one data type as of 0.1.0 (String), but more CatVB features will be added that can expand this. Variables are not considered
data types since CatWeb does the variable identification.

You can pass data without a data type declaration for now, (like "" for strings), but "" is reccomended to include spaces.

#### OPERATORS AND STATEMENTS

Operators and statements allow for easy identification, logic and calculation.

Note that statements end with a colon like this:

```
when websiteloaded:
```

**when** - Used to recieve events
**end** - Used to end a statement.

#### COMMENTS

Coming soon!

### III. INPUT AND OUTPUT

#### CONSOLE FUNCTIONS

These functions allow you to send output to the console.

**log (any)** Prints the output to the console.
```
when websiteloaded:
    log "Hello World"
end
```

#### EVENTS

Events allow you to recieve calls or events from the engine or system like button presses and more.

**websiteloaded** - The code inside is executed if the website is loaded.
```
when websiteloaded:
end
```
