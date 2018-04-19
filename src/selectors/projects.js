export default ( expenses, { text, sort, startDate, endDate } ) => {

    return expenses.filter( ( expense ) => {

        const startDateMatch = typeof startDate !== "number" || startDate >= expense.createdOn,
        endDateMatch = typeof endDate !== "number" || endDate <= expense.createdOn,
        textMatch =  expense.description.toLowerCase().includes( text.toLowerCase() ) ;

        return startDateMatch && endDateMatch && textMatch;

    }).sort( ( a, b ) => {

        if( sort === "date" ){
            
            return a.createdOn < b.createdOn ? 1 : -1

        }

        if( sort === "amount" ){

            return a.amount > b.amount ? 1 : -1

        }

    });

};