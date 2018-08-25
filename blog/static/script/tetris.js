var Block = function(){
    this.initPositionX = 0;
    this.initPositionY = 0;
    this.width = 4;
    this.height = 4;
    this.coord = Array(this.height).fill().map(() => Array(this.width).fill(0));
    this.type = 0;
}

var State = {
    START:0,
    GAME_OVER:1,
}

Block.prototype.makeBlockType1 = function(){
    var b1 = new Block();
    b1.initPositionX = 0;
    b1.initPositionY = 0;
    b1.coord[1][0] = 1;
    b1.coord[1][1] = 1;
    b1.coord[1][2] = 1;
    b1.coord[1][3] = 1;
    b1.nextSwitchBlock = Block.prototype.makeBlockType1_1();
    b1.nextSwitchBlock.nextSwitchBlock = b1;
    b1.type = 1;
    return b1;
};

Block.prototype.makeBlockType1_1 = function(){
    var b1 = new Block();
    b1.initPositionX = 0;
    b1.initPositionY = 0;
    b1.coord[0][2] = 1;
    b1.coord[1][2] = 1;
    b1.coord[2][2] = 1;
    b1.coord[3][2] = 1;
    b1.type = 1;
    return b1;
}

Block.prototype.makeBlockType2 = function(){
    var b2 = new Block();
    b2.initPositionX = 0;
    b2.initPositionY = 0;
    b2.coord[0][1] = 1;
    b2.coord[1][1] = 1;
    b2.coord[1][2] = 1;
    b2.coord[1][3] = 1;
    b2.nextSwitchBlock = Block.prototype.makeBlockType2_1();
    b2.nextSwitchBlock.nextSwitchBlock = Block.prototype.makeBlockType2_2();
    b2.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock = Block.prototype.makeBlockType2_3();
    b2.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock = b2;
    b2.type = 2;
    return b2;

}

Block.prototype.makeBlockType2_1 = function(){
    var b2 = new Block();
    b2.initPositionX = 0;
    b2.initPositionY = 0;
    b2.coord[0][2] = 1;
    b2.coord[0][3] = 1;
    b2.coord[1][2] = 1;
    b2.coord[2][2] = 1;
    b2.type = 2;
    return b2;
}

Block.prototype.makeBlockType2_2 = function(){
    var b2 = new Block();
    b2.initPositionX = 0;
    b2.initPositionY = 0;
    b2.coord[0][0] = 1;
    b2.coord[0][1] = 1;
    b2.coord[0][2] = 1;
    b2.coord[1][2] = 1;
    b2.type = 2;
    return b2;
}

Block.prototype.makeBlockType2_3 = function(){
    var b2 = new Block();
    b2.initPositionX = 0;
    b2.initPositionY = 0;
    b2.coord[0][1] = 1;
    b2.coord[1][1] = 1;
    b2.coord[2][1] = 1;
    b2.coord[2][0] = 1;
    b2.type = 2;
    return b2;
}

Block.prototype.makeBlockType3 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][2] = 1;
    b.coord[1][0] = 1;
    b.coord[1][1] = 1;
    b.coord[1][2] = 1;
    b.nextSwitchBlock = Block.prototype.makeBlockType3_1();
    b.nextSwitchBlock.nextSwitchBlock = Block.prototype.makeBlockType3_2();
    b.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock = Block.prototype.makeBlockType3_3();
    b.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock = b;
    b.type = 3;
    return b;
}

Block.prototype.makeBlockType3_1 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][1] = 1;
    b.coord[1][1] = 1;
    b.coord[2][1] = 1;
    b.coord[2][2] = 1;
    b.type = 3;

    return b;
}

Block.prototype.makeBlockType3_2 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][0] = 1;
    b.coord[0][1] = 1;
    b.coord[0][2] = 1;
    b.coord[1][0] = 1;
    b.type = 3;

    return b;
}


Block.prototype.makeBlockType3_3 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][0] = 1;
    b.coord[0][1] = 1;
    b.coord[1][1] = 1;
    b.coord[2][1] = 1;
    b.type = 3;

    return b;
}
Block.prototype.makeBlockType4 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][1] = 1;
    b.coord[0][2] = 1;
    b.coord[1][1] = 1;
    b.coord[1][2] = 1;
    b.nextSwitchBlock = b;
    b.type = 4;

    return b;
}
Block.prototype.makeBlockType5 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][1] = 1;
    b.coord[0][2] = 1;
    b.coord[1][0] = 1;
    b.coord[1][1] = 1;
    b.nextSwitchBlock = Block.prototype.makeBlockType5_1();
    b.nextSwitchBlock.nextSwitchBlock = b;
    b.type = 5;

    return b;
}

Block.prototype.makeBlockType5_1 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][0] = 1;
    b.coord[1][0] = 1;
    b.coord[1][1] = 1;
    b.coord[2][1] = 1;
    b.type = 5;

    return b;
}

Block.prototype.makeBlockType6 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][1] = 1;
    b.coord[1][0] = 1;
    b.coord[1][1] = 1;
    b.coord[1][2] = 1;
    b.nextSwitchBlock = Block.prototype.makeBlockType6_1();
    b.nextSwitchBlock.nextSwitchBlock = Block.prototype.makeBlockType6_2();
    b.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock = Block.prototype.makeBlockType6_3();
    b.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock.nextSwitchBlock = b;
    b.type = 6;

    return b;
}

Block.prototype.makeBlockType6_1 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][1] = 1;
    b.coord[1][1] = 1;
    b.coord[1][2] = 1;
    b.coord[2][1] = 1;
    b.type = 6;

    return b;
}

Block.prototype.makeBlockType6_2 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[1][0] = 1;
    b.coord[1][1] = 1;
    b.coord[1][2] = 1;
    b.coord[2][1] = 1;
    b.type = 6;

    return b;
}

Block.prototype.makeBlockType6_3 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][1] = 1;
    b.coord[1][0] = 1;
    b.coord[1][1] = 1;
    b.coord[2][1] = 1;
    b.type = 6;

    return b;
}


Block.prototype.makeBlockType7 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][0] = 1;
    b.coord[0][1] = 1;
    b.coord[1][1] = 1;
    b.coord[1][2] = 1;
    b.nextSwitchBlock = Block.prototype.makeBlockType7_1();
    b.nextSwitchBlock.nextSwitchBlock = b;
    b.type = 7;

    return b;
}

Block.prototype.makeBlockType7_1 = function(){
    var b = new Block();
    b.initPositionX = 0;
    b.initPositionY = 0;
    b.coord[0][2] = 1;
    b.coord[1][1] = 1;
    b.coord[1][2] = 1;
    b.coord[2][1] = 1;
    b.type = 7;
    return b;
}


var tetris = {
    table: [[]],
    resetTable: function(width, height){
        this.table = Array(height).fill().map(() => Array(width).fill(0));
        $(".tetris-table").css("width", (width*25)+"px");
        $(".tetris-table").css("height", (height*25)+"px");
        $(".tetris-board").css("width", (width*25)+"px");
        $(".tetris-board").css("height", (height*25)+"px");
        this.tableWidth = width;
        this.tableHeight = height;
    },
    appendBlock: function(block, tableX, tableY){
        for(var i = block.initPositionY; i < block.height; ++i){
            for(var j = block.initPositionX; j < block.width; ++j){
                if(block.coord[i][j] != 0){
//                    console.log((tableY + i - block.initPositionY) + " : " +(tableX + j - block.initPositionX));
                    var y = tableY + i - block.initPositionY;
                    var x = tableX + j - block.initPositionX;
                    if(this.getTableCoord(y, x) == 0){
                        this.setTableCoord(y, x, block.type);
                    }
                    else{
                        return false;
                    }
                }
            }
        }
        return true;
    },
    setTableCoord: function(y,x, val){
        if(this.tableWidth <= x || this.tableHeight <= y){
            return false;
        }
        this.table[y][x] = val;
        return true;
    },
    getTableCoord: function(y, x){
        if(this.tableWidth <= x || this.tableHeight <= y){
            return -1;
        }
        else{
            return this.table[y][x];
        }
    }
    ,
    clearBlock: function(block,tableX, tableY){

        for(var i = 0; i < 4; ++i){
            for(var j = 0; j < 4; ++j){
                if(tableX + j >= this.tableWidth || tableY + i >= this.tableHeight){
                    continue;
                }
                if(block.coord[i][j] != 0){
                    this.setTableCoord(tableY + i, tableX + j, 0);
                }
            }
        }

    },
    show: function(block){
        var height = this.table.length;
        var width = this.table[0].length;
        for(var i = 0; i < height; ++i){
            for(var j = 0; j < width; ++j){
                if(this.table[i][j] == 0){
                    var blockPosName = "tetris-h" + i +"w"+ j;
                    $("."+blockPosName).remove();
//                    $(".tetris-table")
//                    .append("<div class='tetris-white-space "+blockPosName+"'><div>");
//
//                    $("."+blockPosName).css("left", (j*25)+"px");
//                    $("."+blockPosName).css("top", (i*25)+"px");
                }
                else{
                    var color = "tetris-block-color-"+this.table[i][j];
                    var blockPosName = "tetris-h" + i +"w"+ j;
                    if( $("."+blockPosName).length ){
                        if($("."+blockPosName).hasClass(color)){
                            continue;
                        }
                        else{
                            $("."+blockPosName).remove();
                        }
                    }
                    $(".tetris-table").append("<div class='tetris-block "+blockPosName+" "+color+"'><div>");

                    $("."+blockPosName).css("left", (j*25)+"px");
                    $("."+blockPosName).css("top", (i*25)+"px");
                }
            }
        }
    },
    checkCollision: function(block, tableX, tableY){
        var checkDue = [];
        for(var i = 0; i < block.height; ++i){
            for(var j = 0; j < block.width; ++j){
                if(block.coord[i][j] != 0){
                    if(i==(block.height-1)){
                        checkDue.push([i+1,j]);
                        continue;
                    }
                    if(block.coord[i+1][j]==0){
                        checkDue.push([i+1,j]);
                    }
                }
            }
        }
        console.log(checkDue);
        console.log(checkDue.length);

        for(var i = 0; i < checkDue.length; ++i){
            var x = tableX + checkDue[i][1] - block.initPositionX;
            var y = tableY + checkDue[i][0] - block.initPositionY;
            console.log(" "+(y));
            console.log("  "+(x));

            if(y == this.tableHeight){
                return true;
            }
            if(this.getTableCoord(y, x) != 0){
                return true;
            }
        }
        return false;

    },
    checkUpCollision: function(block, tableX, tableY){
        var checkDue = [];
        for(var i = 0; i < block.height; ++i){
            for(var j = 0; j < block.width; ++j){
                if(block.coord[i][j] != 0){
                    if(i==0){
                        checkDue.push([i,j]);
                    }
                }
            }
        }
        console.log(checkDue);
        console.log(checkDue.length);

        for(var i = 0; i < checkDue.length; ++i){
            var x = tableX + checkDue[i][1] - block.initPositionX;
            var y = tableY + checkDue[i][0] - block.initPositionY;
            console.log(" "+(y));
            console.log("  "+(x));

            if(y <= 0){
                return true;
            }
//            if(this.getTableCoord(y, x) != 0){
//                return true;
//            }
        }
        return false;

    },
    checkLeftCollision: function(block, tableX, tableY){
        var checkDue = [];
        for(var i = 0; i < block.height; ++i){
            for(var j = 0; j < block.width; ++j){
                if(block.coord[i][j] != 0){

                    if(j==0){
                        checkDue.push([i,j-1]);
                        continue;
                    }

                    if(block.coord[i][j-1]==0){
                        checkDue.push([i,j-1]);
                    }
                }
            }
        }
        console.log(checkDue);
        console.log(checkDue.length);

        for(var i = 0; i < checkDue.length; ++i){
            var x = tableX + checkDue[i][1] - block.initPositionX;
            var y = tableY + checkDue[i][0] - block.initPositionY;
            console.log(" "+(y));
            console.log("  "+(x));

            if(x < 0){
                return true;
            }

            if(this.getTableCoord(y, x) != 0){
                return true;
            }
        }
        return false;

    },
    checkRightCollision: function(block, tableX, tableY){
        var checkDue = [];
        for(var i = 0; i < block.height; ++i){
            for(var j = 0; j < block.width; ++j){
                if(block.coord[i][j] != 0){
                    if(j==(block.width-1) ){
                        checkDue.push([i,j+1]);
                        continue;
                    }

                    if(block.coord[i][j+1]==0){
                        checkDue.push([i,j+1]);
                    }
                }
            }
        }
        console.log(checkDue);
        console.log(checkDue.length);

        for(var i = 0; i < checkDue.length; ++i){
            var x = tableX + checkDue[i][1] - block.initPositionX;
            var y = tableY + checkDue[i][0] - block.initPositionY;
            console.log(" "+(y));
            console.log("  "+(x));

            if(x == this.tableWidth){
                return true;
            }

            if(this.getTableCoord(y, x) != 0){
                return true;
            }
        }
        return false;

    },
    checkCoordDuplicate: function(block, tableX, tableY){
        var checkDue = [];
        for(var i = 0; i < block.height; ++i){
            for(var j = 0; j < block.width; ++j){
                if(block.coord[i][j] != 0){
                    checkDue.push([i,j]);
                }
            }
        }
        console.log(checkDue);
        console.log(checkDue.length);

        for(var i = 0; i < checkDue.length; ++i){
            var x = tableX + checkDue[i][1] - block.initPositionX;
            var y = tableY + checkDue[i][0] - block.initPositionY;
            console.log(" "+(y));
            console.log("  "+(x));

            if(x >= this.tableWidth || x < 0 ){
                return true;
            }

            if(y >= this.tableHeight || y < 0 ){
                return true;
            }

            if(this.getTableCoord(y, x) != 0){
                return true;
            }
        }
        return false;

    },
    checkGameOver: function(block, tableX, tableY){
        var gameOver = this.checkCoordDuplicate(block,4,0);
        console.log("duplicate: " + gameOver);
        gameOver = gameOver || this.checkUpCollision(block, tableX, tableY);
        console.log("upColl: " + gameOver);

        return gameOver;
    }
    ,
    clearLine: function(){
        for(var i = 0; i < this.tableHeight; ++i){
            for(var index = 0; index < this.tableWidth; ++index){
                if(this.table[i][index] == 0){
                    break;
                }
            }
            //클리어해야함
            if( index == this.tableWidth ){
                for(var c = i; c >= 1; --c){
                    this.table[c] = this.table[c-1];
                }
                this.table[0] = Array(this.tableWidth).fill(0);
            }
        }
    },
    getRandomBlock: function(){
        var num = Math.floor(Math.random() * 7) + 1;
        if(num==1){
            return Block.prototype.makeBlockType1();
        }
        else if(num==2){
            return Block.prototype.makeBlockType2();
        }
        else if(num==3){
            return Block.prototype.makeBlockType3();
        }
        else if(num==4){
            return Block.prototype.makeBlockType4();
        }
        else if(num==5){
            return Block.prototype.makeBlockType5();
        }
        else if(num==6){
            return Block.prototype.makeBlockType6();
        }
        else {
            return Block.prototype.makeBlockType7();
        }

    },
    hideGameOver: function(){
        $(".tetris-game-over").css("display", "none");
        $(".tetris-table").css({
            '-webkit-filter': 'blur(0px)',
            '-moz-filter' : 'blur(0px)',
            '-o-filter' : 'blur(0px)',
            '-ms-filter' : 'blur(0px)',
            'filter': 'blur(0px)',
        });
    },
    showGameOver: function(){
        $(".tetris-game-over").css("display", "block");
        $(".tetris-table").css({
            '-webkit-filter': 'blur(5px)',
            '-moz-filter' : 'blur(5px)',
            '-o-filter' : 'blur(5px)',
            '-ms-filter' : 'blur(5px)',
            'filter': 'blur(5px)',
        });
    },
    test: function(){
        var state = State.START;
        this.hideGameOver();
        this.resetTable(10,20);

        var currentBlock = this.getRandomBlock();
        this.appendBlock(currentBlock,4,0);
        this.show();
        var thisObj = this;
        var isDoingCheck = false;
        var initX = 4;
        var initY = 0;
        var id = setInterval(function(){
            isDoingCheck = true;
            if(thisObj.checkCollision(currentBlock, initX, initY)){
                console.log(thisObj.table);
                console.log("collision");

                thisObj.clearLine();
                console.log(thisObj.table);


                if(thisObj.checkGameOver(currentBlock,initX,initY)){
                    state = State.GAME_OVER;
                    clearInterval(id);
                    thisObj.showGameOver();
                    isDoingCheck = false;
                    return;
                }

                currentBlock = thisObj.getRandomBlock();
                thisObj.appendBlock(currentBlock,4,0);
                thisObj.show();


                initX = 4;
                initY = 0;


                return;
            }
            isDoingCheck = false;
            thisObj.clearBlock(currentBlock,initX, initY);
            initY+=1;
            thisObj.appendBlock(currentBlock,initX,initY);
            thisObj.show();
        }, 1000);

        $("body").keydown(function(e){
            //UP
            if(e.keyCode == 38){
                if(isDoingCheck){
                    return;
                }
                thisObj.clearBlock(currentBlock,initX, initY);
                if( thisObj.checkCoordDuplicate(currentBlock.nextSwitchBlock, initX, initY) ){
                    thisObj.appendBlock(currentBlock,initX,initY);
                    return;
                }
                currentBlock = currentBlock.nextSwitchBlock;
                thisObj.appendBlock(currentBlock,initX,initY);
                thisObj.show();
            }
            //LEFT
            if(e.keyCode == 37){
                if(isDoingCheck){
                    return;
                }
                if(thisObj.checkLeftCollision( currentBlock, initX, initY )){
                    return;
                }
                thisObj.clearBlock(currentBlock,initX, initY);
                initX -=1;
                thisObj.appendBlock(currentBlock,initX,initY);
                thisObj.show();
            }
            //RIGHT
            if(e.keyCode == 39){
                if(isDoingCheck){
                    return;
                }
                if(thisObj.checkRightCollision( currentBlock, initX, initY )){
                    return;
                }
                thisObj.clearBlock(currentBlock,initX, initY);
                initX +=1;
                thisObj.appendBlock(currentBlock,initX,initY);
                thisObj.show();
            }
            //SpaceBar
            if(e.keyCode == 32){
                if(isDoingCheck){
                    return;
                }
                if(state == State.START){
                    while(true){
                        thisObj.clearBlock(currentBlock,initX, initY);
                        initY +=1;
                        thisObj.appendBlock(currentBlock,initX,initY);
                        if(thisObj.checkCollision(currentBlock, initX, initY)){
                            console.log(thisObj.table);
                            console.log("collision");
                            thisObj.clearLine();
                            if(thisObj.checkGameOver(currentBlock,initX,initY)){
                                state = State.GAME_OVER;
                                clearInterval(id);
                                thisObj.showGameOver();
                                break;
                            }

                            currentBlock = thisObj.getRandomBlock();
                            thisObj.appendBlock(currentBlock,4,0);
                            thisObj.show();


                            initX = 4;
                            initY = 0;

                            break;
                        }
                    }

                }
                else if(state == State.GAME_OVER){
                    state = State.START;
                    thisObj.hideGameOver();
                    thisObj.resetTable(10,20);

                    currentBlock = thisObj.getRandomBlock();
                    thisObj.appendBlock(currentBlock,4,0);
                    thisObj.show();
                    isDoingCheck = false;
                    initX = 4;
                    initY = 0;
                    id = setInterval(function(){
                        isDoingCheck = true;
                        if(thisObj.checkCollision(currentBlock, initX, initY)){
                            console.log(thisObj.table);
                            console.log("collision");

                            if(thisObj.checkGameOver(currentBlock,initX,initY)){
                                state = State.GAME_OVER;
                                clearInterval(id);
                                thisObj.showGameOver();
                                isDoingCheck = false;
                                return;
                            }

                            currentBlock = thisObj.getRandomBlock();
                            thisObj.appendBlock(currentBlock,4,0);
                            thisObj.show();

                            initX = 4;
                            initY = 0;

                            return;
                        }
                        isDoingCheck = false;
                        thisObj.clearBlock(currentBlock,initX, initY);
                        initY+=1;
                        thisObj.appendBlock(currentBlock,initX,initY);
                        thisObj.show();
                    }, 1000);
                }
            }
        });


    }
}