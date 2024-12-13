import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { VotingBar } from '@/components/ui/votingBar';
import { useEffect, useState } from 'react';
import { Code, Users, Database, Coins, Car } from 'lucide-react';


export const GovSimInterface = () => {
    const [selectedBar, setSelectedBar] = useState(null);
    const [votes, setVotes] = useState({
      devs: 65,
      clients: 55,
      storageProviders: 70,
      tokenHolders: 75
    });

    useEffect(() => {
        const { devs, clients, storageProviders, tokenHolders } = votes;
        console.log(`devs: ${devs}`);
        console.log(`clients: ${clients}`);
        console.log(`storageProviders: ${storageProviders}`);
        console.log(`tokenHolders: ${tokenHolders}`);
    }, [votes]);

    const updateVote = (constituency, value) => {
        setVotes((prev) => ({
            ...prev,
            [constituency]: value,
        }));
    };

    const average = Math.round(
      Object.values(votes).reduce((sum, val) => sum + val, 0) / Object.keys(votes).length
    );

    const constituencyDescriptions = {
      devs: "Core protocol developers and implementation teams who build and maintain the network's software.",
      clients: "Client applications and services that integrate with and build upon the protocol.",
      storageProviders: "Network participants who provide storage capacity and maintain the network's data.",
      tokenHolders: "Community members who hold governance tokens and participate in network decisions."
    };

    return (
      <Card className="w-full max-w-4xl py-6 my-4 mx-6">
        <CardContent className="w-my-6">
          <div className="flex justify-center items-end space-x-8">
            <VotingBar
              title="Devs"
              icon={Code}
              percentage={votes.devs}
              onChange={(value) => updateVote('devs', value)}
              onSelect={() => setSelectedBar('devs')}
            />
            <VotingBar
              title="Clients"
              icon={Users}
              percentage={votes.clients}
              onChange={(value) => updateVote('clients', value)}
              onSelect={() => setSelectedBar('clients')}
            />
            <VotingBar
              title="Storage Providers"
              icon={Database}
              percentage={votes.storageProviders}
              onChange={(value) => updateVote('storageProviders', value)}
              onSelect={() => setSelectedBar('storageProviders')}
            />
            <VotingBar
              title="Token Holders"
              icon={Coins}
              percentage={votes.tokenHolders}
              onChange={(value) => updateVote('tokenHolders', value)}
              onSelect={() => setSelectedBar('tokenHolders')}
            />
          </div>

          {selectedBar && (
            <div className="w-full mt-8 p-4 bg-slate-100 rounded-lg">
            <h3 className="font-bold mb-2">
                {selectedBar.charAt(0).toUpperCase() + selectedBar.slice(1).replace(/([A-Z])/g, ' $1')}
            </h3>
            <p className="text-gray-600">
                {constituencyDescriptions[selectedBar]}
            </p>
            </div>
          )}

          <div className="mt-8 text-center text-xl font-bold">
            {average >= 50 ? (
              <div className="text-green-600">FIP PASSES</div>
            ) : (
              <div className="text-red-600">FIP DOES NOT PASS</div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };


