import {getCurrentYear} from '../../utils/utils.js';

// Get year element and add current year in that element
const YEAR_ELEMENT = document.getElementById('year');
YEAR_ELEMENT.textContent = getCurrentYear();
