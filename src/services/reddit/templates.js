/* eslint no-multi-str: 0 */
import _ from 'lodash';


export const proofTitle = _.template('I control Ethereum account ${address}.');

const PROOF_TEXT_TEMPLATE =
"I'm posting this to prove that **/u/${username}** controls the Ethereum account " +
'**${address}**. This proof lets me use my username in [${appName}](${appUrl}) ' +
'and in any other Ethereum-based app.';

export const proofText = _.template(PROOF_TEXT_TEMPLATE);

export const proofUpdateText = _.template(PROOF_TEXT_TEMPLATE + '\n' +
'\n' +
'I registered this proof with a [transaction](${txUrl}) that contains a ' +
'[reference to my claim](${ipfsUrl}). That claim is reproduced below.\n' +
'\n' +
'${claimRecord}\n');
