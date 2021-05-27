import inquirer from 'inquirer'
export async function promptSelectActions(){

    const actions = [
        {
            trigger: "characters",
            placeholder: 'Count characters',
        },
        {
            trigger: "words",
            placeholder: 'Count words',
        },
        {
            trigger: "occurences",
            placeholder: 'Map word occurences',
        },
        {
            trigger: "keywords",
            placeholder: 'Yake statistic',
        },
    ]

    const actionReq = [
      {
        type: 'list',
        name: 'action',
        message: 'Select action to trigger to the contain:',
        choices: actions.map(action => {return action.placeholder})
      }
    ];

    const numberReq = [
        {
            type: 'integer',
            name: 'number',
            message: 'How many keywords you want:',
            default: 10,
        }
    ];

    const answers = await inquirer.prompt(actionReq);
    let actionSelect = ""
    actions.map(action => {
        if( action.placeholder == answers.action){
            actionSelect = action.trigger
        }
    })
    let select = {
        action: actionSelect
    }

    if (actionSelect == "keywords"){
        const number = await inquirer.prompt(numberReq);
        select["number"] = number.number
    }

    return select
}
