import { useRouter } from 'next/router';


function DeckPage() {

const router = useRouter();

const deckId = router.query.deckId;

//send request to db to get deck saved cards

    return <h1>this is the profile dynamic page</h1>
}
 export default DeckPage;