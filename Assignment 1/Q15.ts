/* Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite. */

let guest_name = ['Ali', 'Ahmad', 'Abdul'];
guest_name.splice(0,1,'Rehman')
for (let i = 0; i < guest_name.length; i++) {
    console.log(`Hi ${guest_name[i]}, You are invited on Dinner.`)
    }


export{}