import React from 'react'
import './CSS/shopCategory.css'
import Item from '../components/item/Item'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
// import all_product from '../components/assets/all_product'

const ShopCategory = (props) => {
    console.log(props)
    const {all_product} = useContext(ShopContext); 
    console.log(all_product)
    console.log(typeof(all_product))
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt='banner imgage' />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span>out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt='dropdown' />
                </div>
            </div>
            <div className="shopcategory-products">
            {/* {all_product.map((item,i)=>{
                if (props.category === item.category) {
                   return <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else {
                    return null
                }
                })} */}
                {all_product && all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
                {/* {Array.isArray(all_product) ? all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} category={item.category} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                }) :  null } */}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory
