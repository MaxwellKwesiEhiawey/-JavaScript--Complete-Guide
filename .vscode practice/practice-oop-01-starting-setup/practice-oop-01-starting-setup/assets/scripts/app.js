class Tooltip {}

class ProjectItem{
  constructor(id) {
    this.(id) = id;
  }
  connectSwitchButton() {
    
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const projItems = document.querySelectorAl(`#${type}-projects li`);
    for (const prjItem of prjtems) {
      this.projects.push(new ProjectItem(prjItem.id));
      console.log(this.projects);
  }
    };
}



class App {
  static init() {
const activeProjectList = new ProjectList('active');
const finshedprojectList = new ProjectList('finished');
  }
}

App.init{};