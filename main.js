function setup()
{
    video = createCapture(600, 750);
    video.position(200, 200)
    canvas = createCanvas(500, 500)
    canvas.position(1100, 200);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("Model is loaded");
}

function draw()
{
    background("#8ae6ff")
}

function gotPoses(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else if(results.length > 0)
    {
        console.log(results);
        console.log("d" + results[0].pose.rightWrist.x);
        console.log("d " + results[0].pose.leftWrist.x);
    }
}