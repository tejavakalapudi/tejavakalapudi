export default ( projects ) => {

    return projects.sort( ( a, b ) => {

        return a.createdOn < b.createdOn ? 1 : -1;

    });

};