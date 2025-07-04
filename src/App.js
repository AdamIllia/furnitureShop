import React from "react";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import Items from "./components/Items"
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component{
  constructor(props) {
    super(props); 
    this.state={
      orders:[],
      currentItems:[],
      items:[
        
            {
              id: 1,
             title: "Modern Sofa",
             img: "modernSofaLeather.jpg", 
              desc: 'Enjoy the super-comfortable sofa with deep seat.It is really comfortable to sit.Hope you will enjoy' ,
              category: "seating",
              price: '49.99'
            },
            {
              id: 2,
             title: "Dining Table",
             img: "diningTable.jpg",
             desc: 'The interesting design of the Dinning Table is suitable for the living room, kitchen, and office space.',
             category: "table",
              price: '149.00'
            },
            {
              id: 3,
              title: "Office Chair",
              img:'officeChair.jpg',
             desc: 'By purchasing a high-quality office Chair, you will transform the interior of your office.Hope you will enjoy',
              category: 'seating',
              price: '549.99'
               },
            {
              id: 4,
              title: "Queen Bed Frame",
             img: 'queenBed.jpg',
             desc: 'An item that will harmoniously complement the space or become an accent detail in the interior.',
              category: 'bed', 
              price: '25.00'        
               },
            {
             id: 5,
              title: "Bookshelf",
              category: "storage",
             img: 'bookShelf.jpg', 
              desc: 'Thanks to this, your favorite fairy tales will always be at hand.',
              price: '149.99'
              }
          ],
          ShowFullItem: false,
           fullItem:[]
        }
        this.state.currentItems = this.state.items;
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this); 
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);
    }
  
render(){
  return(
   <div className="wrapper">
<Headers orders={this.state.orders} onDelete={this.deleteOrder}/>
<Categories chooseCategory={this.chooseCategory}/>
<Items onShowItem={this.onShowItem}items={this.state.currentItems} onAdd={this.addToOrder}/>
{this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
    <Footer />
</div>
     )
}


     onShowItem(item){
      this.setState({fullItem:item})
      this.setState({ShowFullItem:!this.state.ShowFullItem})
     }

  chooseCategory(category){


    if(category==='all'){
      this.setState({
        currentItems: this.state.items
      })
      return
    }
   
    this.setState({
      currentItems:this.state.items.filter(el => el.category === category)
    });
  }

    deleteOrder(id){
      this.setState({orders: this.state.orders.filter(el=>el.id!==id)})
    };

   addToOrder(item){
    let isInArr = false; 
    this.state.orders.forEach(el=>{
      if(el.id === item.id){
      isInArr = true; 
      }
    });

    if(!isInArr){
    this.setState({ orders : [...this.state.orders, item]}, ()=>{console.log(this.state.orders)});
  }
   };
    }; 

    

export default App;
