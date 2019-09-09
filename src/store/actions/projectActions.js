export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to the database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Bat',
            authorLastNAme: 'Man',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })//dispatch method dispatches an action to the reducer
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })

    }
}