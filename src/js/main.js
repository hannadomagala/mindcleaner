// css imports
import normalize from 'normalize.css';
import variables from '../css/variables.css';
import main from '../css/main.css';
import pageTemplate from '../css/page-template.css';
import pageContent from '../css/page-content.css';
import inbox from '../css/inbox.css';
import tasks from '../css/tasks.css';
import contexts from '../css/contexts.css';

//basic functionality imports
import highlightActive from './menu';


highlightActive();

const contextsContainer = document.querySelector('.sort-by-context');
const contextsBtn = document.querySelector('.page-nav__link--sort');

const toggleContexts = (e) => {
    e.preventDefault();
    contextsContainer.classList.toggle('sort-by-context--toggle');
};

contextsBtn.addEventListener('click', toggleContexts);
