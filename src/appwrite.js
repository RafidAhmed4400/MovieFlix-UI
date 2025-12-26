import {Databases, Client, ID, Query} from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client);



export const updateSearchCount = async(SearchTerm, movie) => {

    //1.Use appwrite SDk to check if a SearchTerm already exists in the database

    try{
     const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
         Query.equal('searchTerm', SearchTerm),
     ])
        //2. if it has, simply update the count
        if(result.documents.length > 0){
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id,{count: doc.count + 1})
        }
        //3. if not, create a new doc with the SearchTerm and count
        else{
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                SearchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,

            })
        }
    }catch(error){
        console.error(error);
    }


}

export const getTrendingMovies = async () => {
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [

            Query.limit(5),
            Query.orderDesc("count"),
        ])
        return result.documents;
    }catch(error){
        console.error(error);
    }
}