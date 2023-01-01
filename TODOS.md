# OPTIONAL TODOS, FOR WHEN AFTER THE APP IS "FINISHED":

- allow pokemon to be filtered by type
- add a button next to the main ability that shows a description of it. should be a small modal that only takes the space of that infoDiv
- make the shiny sprites button a toggle
- change pokemonProvider (or any component that uses more than 3 state variables) and change it into a reducer
- make all util functions be in one file

# LUXURY TODOS, NOT ENTIRELY NECESSARY, BUT WOULD BE GOOD TO ADD THEM BEFORE THE APP IS "FINISHED" (MAYBES):

- add a linter
- instead of loading... get a loader
- do a revamp of the props each component takes. very specific components can use very specific props, generic components use generic props
- add another page, just to try react router a bit more
- possibly make the EvolutionChain be less ambigous

# TODOS NECESSARY FOR THE APP TO BE "FINISHED":

- choose a color palette and apply it (hover colors, disabled buttons, components etc)
  possible color palettes: persona 4, synthwave, pokemon
- on the pokemon page, a user can click on a type and it will take him to a page dedicated to that type which displays all of the pokemon that match the type. dont make a component/page for each type, only 1 that works for all. it should be okay to fetch an array with ALL of the pokemon because im not displaying anything, just fetching it. fetch ALL of them and then save them on an array, this is an Effect only on mount. from this array just filter them based on type

use ctrl+e for go to file
use the source control tab in vscode for easy commits to github
