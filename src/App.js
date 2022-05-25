import logo from './logo.svg';
import './App.css';


function MyButton() {
  return (
    <button className="boatt">Click me</button >
  );
}

function AboutPage() {
  return (
    <>
      <h1>Sobre Mim</h1>
      <p>Ola Shinobis<br />Como vai</p>
    </>
  );
}

const user = {
  name: 'Nikola Tesla',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg',
  imageSize: 130,
};


function Profile() {
  return (
    <> 
    <img className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        
      />
      <h1>{user.name}</h1>
    </>
  );
}

const aser = {
  nome: 'Elon Musk',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
  imageSize: 170,
};

function Perfil() {
  return(
    <>
  <img className="avatar"
    src={aser.imageUrl}
    alt={'Photo of ' + aser.name}
    style={{
      with: aser.imageSize,
      height: aser.imageSize
    }}/>
  
    <h1>{aser.nome}</h1>
    </>
  );
}



function AdminPanel(){
    return(
      <div>Painel do Administrador</div>
    )

}
function LoginForm(){
  <div className="uii">Login Form</div>
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

 function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}




 function App() {
  let content;
  let isLoggedIn  = new Boolean(true);
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return (  
    <div>
      <h1>Benvindo tranks!!</h1>
      <MyButton />
      <AboutPage/>
      <Profile/>
      <Perfil/>
      <ShoppingList/>
      <content/>
    </div>


  );
}


export default App;