import React from "react";
import styled from "styled-components";
import {DialogContent,DialogFooter,ConfirmButton} from '../FoodDialog/FoodDialog'

const OrderStyled=styled.div`
 position:fixed;
 right:0px;
 top:48px;
 width:340px;
 background-color:white;
 height:calc(100% - 48px);
 z-index:10;
 box-shadow:4px 0px 5px 4px grey;
 dispaly:flex;
 flex-direction:column;
`

const OrderContent=styled(DialogContent)`
  padding:20px;
  height: 87%;
  `

export function Order({orders}){
    return( <OrderStyled>
            {orders.length === 0 ? (
            <OrderContent>Your Order is looking pretty epmty
            </OrderContent> ):( 
            <OrderContent>Found {orders.length} orders</OrderContent>)}
            <DialogFooter>
                <ConfirmButton>
                    Check out
                </ConfirmButton>
            </DialogFooter>
    </OrderStyled>
    )
}