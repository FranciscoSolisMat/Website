const visitLink = (link) => window.open(link, '_blank');
const visitProject = (project) => visitLink(`https://${project}.franciscosolis.cl/`);
const visitRepo = (repo) => visitLink(`https://github.com/FranciscoSolisMat/${repo}`);

const toggleTheme = () => {
    localStorage.setItem('theme', (localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'))
    let body = document.getElementById('page-body')
    if(body){
        body.classList.remove('dark')
        if(localStorage.getItem('theme') === 'dark') body.classList.add('dark')
    }
};

if(localStorage.getItem('theme') === null) localStorage.setItem('theme', 'dark')
let body = document.getElementById('page-body')
if(body){
    body.classList.remove('dark')
    if(localStorage.getItem('theme') === 'dark') body.classList.add('dark')
}

let slider = document.getElementById('slider')
slider.checked = localStorage.getItem('theme') === 'dark'
slider.onclick = toggleTheme

// Visit project
document.querySelectorAll('.visit-project').forEach(el => {
    if(el.hasAttribute('project')) {
        el.onclick = (data) => {
            if(!data.srcElement.href) visitProject(el.getAttribute('project'))
        }
    }
});

// Visit repo
document.querySelectorAll('.visit-repo').forEach(el => {
    if(el.hasAttribute('repo')) {
        el.onclick = (data) => {
            if(!data.srcElement.href) visitRepo(el.getAttribute('repo'))
        }
    }
});
