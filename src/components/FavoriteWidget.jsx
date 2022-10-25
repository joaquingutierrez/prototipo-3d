import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteWidget = ({ wished, addToWishList, name }) => {
    


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