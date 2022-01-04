import "./main.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function MainPage(){
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        axios.get("https://abcc245a-8de9-4205-a7e9-197733bdbc26.mock.pstmn.io/products")
        .then(function(result){
            const products = result.data.products;
            console.log(products);
            setProducts(products);  
        }).catch(function(error){
            console.log(error);
        })
    },[])
    
    return(
            <div id="main">
                <div id="visual">
                    <img src="images/banners/banner1.png" alt="최신조명" />
                </div>
                <div id="product" className="innerCon">
                    <h1>그린 조명 최신상품</h1>
                    <div id="product-list">
                        {
                        products.map(product => {
                            return (
                                <div className="product-card" key={product.id}>
                                    <Link to={`/products/${product.id}`}>
                                    <div>
                                        <img className="product-img" 
                                        src={product.imageUrl} alt="조명"/>
                                    </div>
                                    <div className="product-contents">
                                        <span>{product.name}</span>
                                        <span>{product.price}원</span>
                                        <div>
                                            <img className="product-avatar" src="images/icons/avatar.png" alt="아이콘" />
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>   
                            );
                        })
                        }        
                    </div>
                </div>
            </div>
    );
}
export default MainPage;