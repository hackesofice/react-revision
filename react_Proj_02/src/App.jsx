import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './components/homePage/homePage'
import afterHomePage from './components/afterHomePage/afterHomePage'


function App() {
  // const [count, setCount] = useState(0)
  const [activeDataIndex, setActiveDataIndex] = useState(0);

  const navData = [
    { url: "#", text: "Home"},
    { url: "#", text: "About" },
    { url: "#", text: "Contact" },
    { url: "#", text: "More" },
    { url: "#", text: "Photographer" },
    { url: "#", text: "Documentry" },
    { url: "#", text: "🔍" },
    { url: "#", text: "👤" },
  ];

  const cardsData = [
    { img:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80", name:"Lion", description:"A powerful lion resting in the wild.", header:"King of the Jungle" },
    { img:"https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80", name:"Tiger", description:"A majestic tiger moving through its natural habitat.", header:"Wild Predator" },
    { img:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80", name:"Elephant", description:"A magnificent elephant standing peacefully in nature.", header:"Gentle Giant" },
    { img:"https://images.unsplash.com/photo-1554990772-0bea55d510d5?auto=format&fit=crop&w=1200&q=80", name:"Wolf", description:"A wild wolf watching its surroundings.", header:"Spirit of the Wild" },
    { img:"https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80", name:"Dog", description:"A friendly dog enjoying the outdoors.", header:"Loyal Companion" },
    { img:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80", name:"Cat", description:"A graceful cat posing naturally.", header:"Silent Hunter" },
    { img:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80", name:"Parrot", description:"A colorful parrot surrounded by tropical greenery.", header:"Colorful Wings" },
    { img:"https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80", name:"Owl", description:"An owl looking carefully from its perch.", header:"Night Watcher" },
    { img:"https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=80", name:"Eagle", description:"A powerful eagle preparing to take flight.", header:"Master of the Sky" },
    { img:"https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1200&q=80", name:"Deer", description:"A peaceful deer standing among trees.", header:"Forest Beauty" },

    { img:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80", name:"Giraffe", description:"A tall giraffe walking across the savanna.", header:"Towering Grace" },
    { img:"https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=80", name:"Zebra", description:"A zebra standing proudly in the grasslands.", header:"Striped Beauty" },
    { img:"https://images.unsplash.com/photo-1534188753412-3e26d0f3a5f2?auto=format&fit=crop&w=1200&q=80", name:"Gorilla", description:"A strong gorilla resting in a green forest.", header:"Forest Giant" },
    { img:"https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80", name:"Panda", description:"A giant panda enjoying a peaceful moment.", header:"Bamboo Lover" },
    { img:"https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=1200&q=80", name:"Koala", description:"A sleepy koala resting high in a eucalyptus tree.", header:"Sleepy Survivor" },
    { img:"https://images.unsplash.com/photo-1559253664-ca249d4608c6?auto=format&fit=crop&w=1200&q=80", name:"Fox", description:"A clever fox exploring its woodland home.", header:"Clever Wanderer" },
    { img:"https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=1200&q=80", name:"Horse", description:"A beautiful horse standing in an open field.", header:"Free Spirit" },
    { img:"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80", name:"Puppy", description:"A playful puppy looking toward the camera.", header:"Playful Friend" },
    { img:"https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80", name:"Cow", description:"A peaceful cow grazing in a green meadow.", header:"Peaceful Pasture" },
    { img:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80", name:"Kitten", description:"A small kitten sitting quietly indoors.", header:"Tiny Explorer" },

    { img:"https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=1200&q=80", name:"Golden Retriever", description:"A golden retriever enjoying a sunny day.", header:"Golden Friend" },
    { img:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1200&q=80", name:"Husky", description:"A Siberian husky looking alert and energetic.", header:"Arctic Spirit" },
    { img:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80", name:"Dogs", description:"Two happy dogs enjoying time together.", header:"Best Friends" },
    { img:"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80", name:"Puppy", description:"A curious puppy exploring its surroundings.", header:"Curious Soul" },
    { img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1200&q=80", name:"White Cat", description:"A beautiful white cat relaxing peacefully.", header:"Elegant Feline" },
    { img:"https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80", name:"Black Cat", description:"A mysterious black cat watching quietly.", header:"Midnight Hunter" },
    { img:"https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80", name:"Brown Dog", description:"A friendly brown dog enjoying nature.", header:"Happy Companion" },
    { img:"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=1200&q=80", name:"Sleeping Cat", description:"A cat peacefully sleeping on a soft surface.", header:"Peaceful Dreams" },
    { img:"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1200&q=80", name:"Orange Cat", description:"An orange cat posing in warm natural light.", header:"Golden Whiskers" },
    { img:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80", name:"Tabby Cat", description:"A tabby cat looking directly toward the viewer.", header:"Sharp Eyes" },

    { img:"https://images.unsplash.com/photo-1501706362039-c6e80948c3a1?auto=format&fit=crop&w=1200&q=80", name:"Bear", description:"A large bear wandering through the wilderness.", header:"Mountain Giant" },
    { img:"https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80", name:"Polar Bear", description:"A polar bear walking across an icy landscape.", header:"Arctic King" },
    { img:"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=80", name:"Panda", description:"A panda sitting among bamboo plants.", header:"Bamboo King" },
    { img:"https://images.unsplash.com/photo-1551189013-03c9b8c6f7e1?auto=format&fit=crop&w=1200&q=80", name:"Sloth", description:"A relaxed sloth hanging from a tree branch.", header:"Slow and Steady" },
    { img:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80", name:"Lion Portrait", description:"A close portrait of a powerful male lion.", header:"Royal Strength" },
    { img:"https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80", name:"Red Fox", description:"A red fox standing alert in the wilderness.", header:"Wild Intelligence" },
    { img:"https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80", name:"Deer", description:"A deer standing quietly in a natural landscape.", header:"Woodland Spirit" },
    { img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", name:"Wildlife", description:"A peaceful natural environment filled with wildlife.", header:"Into the Wild" },
    { img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80", name:"Nature", description:"A beautiful wildlife scene surrounded by nature.", header:"Untamed Nature" },
    { img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80", name:"Forest", description:"A dense forest providing shelter for countless animals.", header:"Wild Forest" },

    { img:"https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80", name:"Penguin", description:"A penguin standing in a cold polar environment.", header:"Antarctic Explorer" },
    { img:"https://images.unsplash.com/photo-1551415923-a2297c7f7c6a?auto=format&fit=crop&w=1200&q=80", name:"Flamingo", description:"A flamingo standing gracefully near the water.", header:"Pink Elegance" },
    { img:"https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=1200&q=80", name:"Peacock", description:"A magnificent peacock displaying its colorful feathers.", header:"Feathered Royalty" },
    { img:"https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80", name:"Toucan", description:"A colorful toucan perched on a tropical branch.", header:"Tropical Beauty" },
    { img:"https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80", name:"Owl", description:"A mysterious owl watching from the darkness.", header:"Guardian of Night" },
    { img:"https://images.unsplash.com/photo-1480044965905-02098d419e96?auto=format&fit=crop&w=1200&q=80", name:"Bird", description:"A small bird resting on a natural branch.", header:"Little Wanderer" },
    { img:"https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1200&q=80", name:"Blue Bird", description:"A bright blue bird surrounded by greenery.", header:"Sky Blue" },
    { img:"https://images.unsplash.com/photo-1544923408-75c5cef46f14?auto=format&fit=crop&w=1200&q=80", name:"Eagle", description:"An eagle observing the landscape from above.", header:"Eyes of the Sky" },
    { img:"https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=80", name:"Parrot", description:"A vibrant parrot perched among tropical leaves.", header:"Tropical Flyer" },
    { img:"https://images.unsplash.com/photo-1520637836862-4d197d17c91a?auto=format&fit=crop&w=1200&q=80", name:"Hummingbird", description:"A tiny hummingbird hovering near flowers.", header:"Tiny Wings" },

    { img:"https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1200&q=80", name:"Dolphin", description:"A dolphin swimming through clear ocean water.", header:"Ocean Acrobat" },
    { img:"https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1200&q=80", name:"Sea Turtle", description:"A sea turtle moving peacefully through the ocean.", header:"Ancient Voyager" },
    { img:"https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=1200&q=80", name:"Whale", description:"A massive whale traveling through the open sea.", header:"Ocean Giant" },
    { img:"https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1200&q=80", name:"Clownfish", description:"A colorful clownfish swimming among coral.", header:"Reef Resident" },
    { img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80", name:"Jellyfish", description:"A glowing jellyfish drifting through the water.", header:"Ocean Glow" },
    { img:"https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=1200&q=80", name:"Humpback Whale", description:"A humpback whale rising through the ocean.", header:"Sea Majesty" },
    { img:"https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1200&q=80", name:"Shark", description:"A shark moving silently through deep water.", header:"Ocean Predator" },
    { img:"https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1200&q=80", name:"Dolphin", description:"A playful dolphin swimming in the blue sea.", header:"Ocean Explorer" },
    { img:"https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80", name:"Coral Reef", description:"A colorful reef filled with marine life.", header:"Underwater World" },
    { img:"https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=1200&q=80", name:"Tropical Fish", description:"Colorful fish swimming around a tropical reef.", header:"Color Beneath the Sea" },

    { img:"https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80", name:"Beagle", description:"A cheerful beagle enjoying an outdoor adventure.", header:"Happy Explorer" },
    { img:"https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=80", name:"Labrador", description:"A Labrador enjoying a peaceful outdoor moment.", header:"Faithful Friend" },
    { img:"https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80", name:"Golden Dog", description:"A golden dog standing confidently outdoors.", header:"Warm Companion" },
    { img:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1200&q=80", name:"White Dog", description:"A beautiful white dog looking toward the horizon.", header:"Pure Spirit" },
    { img:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80", name:"Happy Dog", description:"A happy dog enjoying a bright sunny day.", header:"Joyful Life" },
    { img:"https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&w=1200&q=80", name:"Bulldog", description:"A confident bulldog sitting peacefully.", header:"Strong Personality" },
    { img:"https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80", name:"Small Dog", description:"A small dog looking curiously at the camera.", header:"Little Companion" },
    { img:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80", name:"Brown Puppy", description:"A young puppy exploring the world around it.", header:"Young Explorer" },
    { img:"https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=1200&q=80", name:"Black Dog", description:"A black dog standing proudly in natural light.", header:"Dark Beauty" },
    { img:"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80", name:"Husky", description:"A husky enjoying the freedom of the outdoors.", header:"Northern Spirit" },

    { img:"https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80", name:"Leopard", description:"A leopard resting quietly in its natural habitat.", header:"Silent Predator" },
    { img:"https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80", name:"Snow Leopard", description:"A rare snow leopard moving through rocky terrain.", header:"Mountain Ghost" },
    { img:"https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80", name:"Bengal Tiger", description:"A Bengal tiger standing proudly in the wilderness.", header:"Jungle Majesty" },
    { img:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80", name:"Asian Elephant", description:"An Asian elephant walking through a green landscape.", header:"Forest Giant" },
    { img:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80", name:"African Giraffe", description:"A giraffe looking across the African savanna.", header:"Savanna Giant" },
    { img:"https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=80", name:"Zebra", description:"A zebra moving through golden grasslands.", header:"Wild Stripes" },
    { img:"https://images.unsplash.com/photo-1534188753412-3e26d0f3a5f2?auto=format&fit=crop&w=1200&q=80", name:"Mountain Gorilla", description:"A mountain gorilla surrounded by lush forest.", header:"Power of Nature" },
    { img:"https://images.unsplash.com/photo-1501706362039-c6e80948c3a1?auto=format&fit=crop&w=1200&q=80", name:"Brown Bear", description:"A brown bear exploring the wilderness.", header:"Wild Strength" },
    { img:"https://images.unsplash.com/photo-1559253664-ca249d4608c6?auto=format&fit=crop&w=1200&q=80", name:"Red Fox", description:"A red fox standing alert in the forest.", header:"Forest Fox" },
    { img:"https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80", name:"Wild Deer", description:"A deer peacefully exploring the woodland.", header:"Nature's Calm" },

    { img:"https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80", name:"Farm Cow", description:"A cow peacefully grazing on a green farm.", header:"Country Life" },
    { img:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80", name:"Sheep", description:"A sheep enjoying fresh grass in the countryside.", header:"Quiet Countryside" },
    { img:"https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80", name:"Pet Dog", description:"A loyal pet dog relaxing outdoors.", header:"Forever Loyal" },
    { img:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80", name:"Pet Cat", description:"A relaxed cat enjoying a quiet afternoon.", header:"Calm Companion" },
    { img:"https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=1200&q=80", name:"White Horse", description:"A white horse standing beautifully in an open field.", header:"Freedom" },
    { img:"https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80", name:"Horse", description:"A horse running freely across the countryside.", header:"Born to Run" },
    { img:"https://images.unsplash.com/photo-1520637836862-4d197d17c91a?auto=format&fit=crop&w=1200&q=80", name:"Butterfly", description:"A colorful butterfly resting on a flower.", header:"Delicate Wings" },
    { img:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80", name:"Nature", description:"A peaceful natural habitat filled with life.", header:"Wild and Free" },
    { img:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80", name:"Countryside", description:"A beautiful countryside landscape where animals thrive.", header:"Life in Nature" },
    { img:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80", name:"Forest Wildlife", description:"A lush forest providing a natural home for wildlife.", header:"Hidden Wilderness" },

    { img:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80", name:"Safari Giraffe", description:"A giraffe peacefully walking during a safari.", header:"Safari Adventure" },
    { img:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80", name:"African Lion", description:"A majestic lion overlooking the African plains.", header:"African King" },
    { img:"https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=80", name:"Savanna Zebra", description:"A zebra walking across the African savanna.", header:"African Wild" },
    { img:"https://images.unsplash.com/photo-1534188753412-3e26d0f3a5f2?auto=format&fit=crop&w=1200&q=80", name:"Silverback Gorilla", description:"A powerful silverback surrounded by dense greenery.", header:"Forest Warrior" },
    { img:"https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80", name:"Wild Tiger", description:"A tiger moving silently through the jungle.", header:"Jungle Predator" },
    { img:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80", name:"Elephant Herd", description:"Elephants traveling together through their habitat.", header:"Family Giants" },
    { img:"https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80", name:"Leopard", description:"A leopard resting under the shade of trees.", header:"Spotted Shadow" },
    { img:"https://images.unsplash.com/photo-1501706362039-c6e80948c3a1?auto=format&fit=crop&w=1200&q=80", name:"Wild Bear", description:"A bear exploring a remote natural landscape.", header:"Wilderness King" },
    { img:"https://images.unsplash.com/photo-1559253664-ca249d4608c6?auto=format&fit=crop&w=1200&q=80", name:"Forest Fox", description:"A fox quietly walking through autumn woodland.", header:"Autumn Wanderer" },
    { img:"https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80", name:"Young Deer", description:"A young deer standing peacefully in the forest.", header:"Gentle Wild" }
  ];

  const data = {
    'activeDataIndex': activeDataIndex,
    'setActiveDataIndex': setActiveDataIndex,
    'navData': navData,
    'cardsData': cardsData,
  }

  return (
    <>
      <HomePage data={data}/>
      <afterHomePage />
    </>
  )
}

export default App
