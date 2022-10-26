import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteWidget = ({ wished, addToWishList, name }) => {
    

    //si wished es true significa que el producto ya se encuentra en la lista de deseados
    return (
        <>
            {wished ? (
                <FavoriteIcon fontSize="large"/>
            ) : (
                <FavoriteBorderIcon onClick={()=>addToWishList(name)} fontSize="large" />
                )}
        </>
    )
}

export default FavoriteWidget