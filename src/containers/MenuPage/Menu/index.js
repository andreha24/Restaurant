import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {dishes} from "./dishes";
import Dish from "./Dish";

import './../../../tabs.css'


const Menu = () => {
    const {breakfast, raw, bruschetta, coldAppetizer, fish,
        garnishs, grill, mangal, meat, soups, pasta, salads, withWine} = dishes

    return(
        <>
            <Tabs>
            <TabList>
                <Tab>Завтраки</Tab>
                <Tab>Raw</Tab>
                <Tab>Холодные закуски</Tab>
                <Tab>Брускетты</Tab>
                <Tab>К вину</Tab>
                <Tab>Салаты</Tab>
                <Tab>Супы</Tab>
                <Tab>Паста и ризотто</Tab>
                <Tab>Мясо</Tab>
                <Tab>Рыба</Tab>
                <Tab>Grill</Tab>
                <Tab>Мангал</Tab>
                <Tab>Гарниры</Tab>

            </TabList>

            <TabPanel>
                <Dish type={breakfast}/>
            </TabPanel>
            <TabPanel>
                <Dish type={raw}/>
            </TabPanel>
            <TabPanel>
                <Dish type={coldAppetizer}/>
            </TabPanel>
            <TabPanel>
                <Dish type={bruschetta}/>
            </TabPanel>
            <TabPanel>
                <Dish type={withWine}/>
            </TabPanel>
            <TabPanel>
                <Dish type={salads}/>
            </TabPanel>
            <TabPanel>
                <Dish type={soups}/>
            </TabPanel>
            <TabPanel>
                <Dish type={pasta}/>
            </TabPanel>
            <TabPanel>
                <Dish type={meat}/>
            </TabPanel>
            <TabPanel>
                <Dish type={fish}/>
            </TabPanel>
            <TabPanel>
                <Dish type={grill}/>
            </TabPanel>
            <TabPanel>
                <Dish type={mangal}/>
            </TabPanel>
            <TabPanel>
                <Dish type={garnishs}/>
            </TabPanel>

        </Tabs>
        </>
    )
}

export default Menu