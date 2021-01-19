let bg;
let name=[];
let bgarray=[];
let slowtime=0;

function preload() 
{

}

function setup() 
{
    
    createCanvas(1920, 1080);
    bg = loadImage('image/kv_bg.jpg');

    for (let i = 0;i < 50;i++)
    {
        name[i] = createSprite(randomStartX(), randomStartY());
        name[i].addImage('name'+String(i), loadImage('image/'+String(i+1)+'-removebg-preview.png'));
        randomV(i);
    }
}

function draw()
{  
    background(bg);

    for (let i = 0;i < name.length;i++)
    {
        for (let j = 0;j < name.length;j++)
        {
            if(i != j)
            {
                if(Math.abs(name[i].position.x-name[j].position.x)<=90 && Math.abs(name[i].position.y-name[j].position.y)<=90)
                {
                    let a=name[i].position.x-name[j].position.x;
                    let b=name[i].position.y-name[j].position.y;
                    name[i].setVelocity(a/90,b/90);
                    name[j].setVelocity(-a/90,-b/90);
                }
            }
        }

        if (name[i].position.x > 1610*2)
        {
            name[i].position.x = -100*2; 
        }

        if (name[i].position.x < -100*2)
        {
            name[i].position.x = 1610*2; 
        }

        if (name[i].position.y > 900*2)
        {
            name[i].position.y = -100*2; 
        }

        if (name[i].position.y < -100*2)
        {
            name[i].position.y = 900*2; 
        }
    }
    drawSprites();
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

function randomV(nameID)
{
    let RightORLeft=getRandom(-1,1);
    if(RightORLeft>0 && RightORLeft<0.5)
    {
        name[nameID].setVelocity(getRandom(20,50)/50, getRandom(20,50)/50);
    }
    else if(RightORLeft>=0.5)
    {
        name[nameID].setVelocity(getRandom(20,50)/-50, getRandom(20,50)/50);
    }
    else if(RightORLeft<=-0.5)
    {
        name[nameID].setVelocity(getRandom(20,50)/50, getRandom(20,50)/-50);
    }
    else
    {
        name[nameID].setVelocity(getRandom(20,50)/-50, getRandom(20,50)/-50);
    }
    
}

function randomStartX()
{
    let x;

    let RightORLeft=getRandom(-1,1);
    if(getRandom>0)
    {
        x=getRandom(-100,-30*2);
    }
    else
    {
        x=getRandom(1530,1610*2);
    }

    return x;
}

function randomStartY()
{
    let y;

    let RightORLeft=getRandom(-1,1);
    if(getRandom>0)
    {
        y=getRandom(-100,-30*2);
    }
    else
    {
        y=getRandom(850,930*2);
    }

    return y;
}