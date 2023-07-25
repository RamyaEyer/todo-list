const adjustItemOrder = (itemList) => {

    const newIndex = itemList.length - 1;

    if (itemList.length > 1){

        for(let i = 0; i < itemList.length ; i++){

            if(itemList[i].priority.value >= itemList[newIndex].priority.value){

                itemList.splice(i, 0, itemList[newIndex]);
                itemList.pop();

            }

        }

    }

};

export {adjustItemOrder};