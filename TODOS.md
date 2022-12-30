there is a sidebar that allows pokemon to be filtered by type (OPTIONAL)

add a button which opens a modal (?) and shows a description
of the main ability. has to fetch it (OPTIONAL)

make the shiny sprites button a toggle (OPTIONAL)

OPTIONAL, FOR ENDGAME (lol). pokemon provider uses way too much state, change it to a reducer

P4G color palette (?)

IMPORTANT make the PokemonSmall look good on the pokedex

IMPORTANT: READ AND UNDERSTAND EVOLUTIONCHAIN AND AUTOCOMPLETEINPUT FFS.
grab pen and paper and understand the recursion in getEvolutions

instead of loading... get a loader maybe if they are easy to implement

maybe a linter, but check on reddit first

if a component is used in only one place it doesnt need its own separate file. just declare it inside where its
being used (infodiv for sure). very specific components can use very specific props, generic components use generic
props. is autocompleteinput generic or specific?

immediate issues:
problems with urshifu evolution line
scrollbars are kind of fucky in pokemon extended (2em padding bottom)
see if there's a way to make the evolution line be less confusing. you know, arrows and shit

use ctrl+e for go to file
use the source control tab in vscode for easy commits to github
