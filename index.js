function superbowlWin(record)
{
    let winner = record.find(record => record.result ==="W");

    if (winner != undefined)
    {
        return winner.year;
    }
    else
    {
        return undefined;
    }
    
}