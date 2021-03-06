import {Player} from '../models/player.model';
import {ObtainableCard} from '../models/card.models/abstractCard.model';
import {CityCard} from '../models/card.models/cityCard.model';
import {PASSING_START_SALARY} from '../constants/prices';
import {PLAYER_IS_ATTACKED_STEPS, PLAYER_IS_CHASED_STEPS} from "../constants/gameConstants";

export const logMessage = (message: string): void => {
    const messageContainer = document.querySelector<HTMLElement>(
        '.message-container',
    )!;
    const newParagraph = document.createElement('p');
    const newMessage = document.createTextNode(message);
    newParagraph.appendChild(newMessage);
    messageContainer.insertBefore(
        newParagraph,
        messageContainer.firstChild,
    );
};

export module Messages {
    export const playerRolledDice = (
        player: Player,
        dice: number[],
    ): string => {
        const [firstDiceResult, secondDiceResult] = dice;
        if (firstDiceResult === secondDiceResult)
            return `${player.name} rolled a double of ${firstDiceResult}`;
        return `${player.name} rolled a ${firstDiceResult} and a ${secondDiceResult}`;
    };

    export const playerBankrupt = (message:string):
        string => {
        return `${message} is bankrupt and lost the game`;
    };

    export const timeEnded = (seconds: number, player:Player):
        string => {
        return `Time is over, the winner is ${player.name}, game will end in ${seconds} seconds`;
    };

    export const playerWon = (seconds: number, player:Player):
        string => {
        return `The winner is ${player.name}, game will end in ${seconds} seconds`;
    };

export const playerCanBuyCard = (
    player: Player,
    card: ObtainableCard,
): string => {
    return `${player.name} can buy this card for ${card.price}$`;
};

export const playerLost = (player: Player): string => {
    return `${player.name} already lost and can not move, next player ...`
}

export const playerBoughtCard = (
    player: Player,
    card: ObtainableCard,
): string => {
    return `${player.name} bought ${card.name} card`;
};

export const playerCanBuyHouse = (
    player: Player,
    card: CityCard,
  ): string => {
    if(card.numberOfHouses === 0) return `${player.name} can build a tower for ${card.priceOfHouses}$`
    else return `${player.name} can upgrade the tower for ${card.priceOfHouses}$`
  };

export const playerBoughtHouse = (
    player: Player,
    card: CityCard,
  ): string => {
    if(card.numberOfHouses === 1) return `${player.name} built a tower here`;
    else {
      const number = ["first", "second", "third", "fourth", "fifth"];
      let whichLevel = number[card.numberOfHouses-1];
      return `${player.name} upgraded the tower to ${whichLevel} level`;
    }
  };

export const playerPaidMoneyToOwner = (
    player: Player,
    owner: Player,
    price: number,
    priceDiscount: number,
): string => {
    let optionalMessageContent: string = '';
    if (priceDiscount > 0)
        optionalMessageContent = `(with ${
            priceDiscount * 100
        }% discount)`;
    return `${player.name} paid ${price}$ to ${owner.name} ${optionalMessageContent}`;
};

export const playerGotMoney = (
    player: Player,
    money: number,
): string => {
    return `${player.name} got ${money}$`;
};

export const playerLostMoney = (
    player: Player,
    money: number,
): string => {
    return `${player.name} lost ${money}$`;
};

export const playerWasChased = (
    player: Player,
): string => {
    const numberOfFields = Math.abs(PLAYER_IS_CHASED_STEPS)
    let plural: string = '';
    if (numberOfFields > 1) plural = 's';
    return `${player.name} was chased and moved ${numberOfFields} field${plural} forward`;
};

export const playerWasAttacked = (
    player: Player,
): string => {
    const numberOfFields = Math.abs(PLAYER_IS_ATTACKED_STEPS)
    let plural: string = '';
    if (numberOfFields > 1) plural = 's';
    return `${player.name} was attacked and moved ${numberOfFields} field${plural} backward`;
};

export const playerPassedStart = (player: Player): string => {
    return `${player.name} passed START and recieved ${PASSING_START_SALARY}$`;
};

export const playerWentToJail = (player: Player): string => {
    return `${player.name} went to Jail and lose 2 turns`;
};

export const playerGotOutOfJail = (player: Player): string => {
    return `${player.name} got out of Jail`;
}

export const playerInJail = (player: Player): string => {
    let plural: string = '';
    if (player.blockedTurns > 1) plural = 's';
    return `${player.name} is in Jail, has to wait ${player.blockedTurns} turn${plural}`;
  };

  export const playerSentToJail = (currentPlayer: Player, chosenPlayer: Player): string => {
    return `${currentPlayer.name} sent ${chosenPlayer.name} to Jail`;
  }
}

