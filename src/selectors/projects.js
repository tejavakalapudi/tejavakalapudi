export default (projects, status) => {
  return projects
    .filter(project => {
      if (!status) {
        return true;
      }

      return project.status === status;
    })
    .sort((a, b) => {
      return a.createdOn < b.createdOn ? 1 : -1;
    });
};
