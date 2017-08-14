class App {
  constructor() {
    // bind
    this.showHome = this.showHome.bind(this);
    this.showProjects = this.showProjects.bind(this);
    this.showTeaching = this.showTeaching.bind(this);
    this.showResume = this.showResume.bind(this);

    // set up views
    const homeElem = document.querySelector('#home');
    this.homeScreen = new HomeScreen(homeElem);

    const projectsElem = document.querySelector('#projects');
    this.projectsScreen = new ProjectsScreen(projectsElem);

    const teachingElem = document.querySelector('#teaching');
    this.teachingScreen = new TeachingScreen(teachingElem);

    const resumeElem = document.querySelector('#resume');
    this.resumeScreen = new ResumeScreen(resumeElem);

    // set up menu
    document.querySelector('#menu-home').addEventListener('click', this.showHome);
    document.querySelector('#menu-projects').addEventListener('click', this.showProjects);
    document.querySelector('#menu-teaching').addEventListener('click', this.showTeaching);
    document.querySelector('#menu-resume').addEventListener('click', this.showResume);
  }

  showHome() {
    this.homeScreen.show();
    this.projectsScreen.hide();
    this.teachingScreen.hide();
    this.resumeScreen.hide();
  }

  showProjects() {
    this.homeScreen.hide();
    this.projectsScreen.show();
    this.teachingScreen.hide();
    this.resumeScreen.hide();
  }

  showTeaching() {
    this.homeScreen.hide();
    this.projectsScreen.hide();
    this.teachingScreen.show();
    this.resumeScreen.hide();
  }

  showResume() {
    this.homeScreen.hide();
    this.projectsScreen.hide();
    this.teachingScreen.hide();
    this.resumeScreen.show();
  }
}
