import bttnstyle from './css/tkg-button.css'
import cardhoverstyle from './css/tkg-card-hover.css'
import pager from './css/tkg-pager.css'
import accordian from './css/tkg-accordian.css'
import { TKGButton } from './js/tkg-templates/tkg-button'
import { TKGHoverCard } from './js/tkg-templates/tkg-card-hover'
import { TKGPager } from './js/tkg-templates/tkg-pager'
import { TKGAccordian } from './js/tkg-templates/tkg-accordian'
import $ from "jquery"; 

/*1: Iterate from arr[1] to arr[n] over the array.
2: Compare the current element (key) to its predecessor.
3: If the key element is smaller than its predecessor, 
compare it to the elements before. Move the greater elements one position up to.*/