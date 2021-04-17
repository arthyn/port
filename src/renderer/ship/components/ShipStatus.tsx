import * as Tooltip from '@radix-ui/react-tooltip';
import React from 'react'
import { Pier } from '../../../background/services/pier-service'

export const ShipStatus = ({ ship }: { ship: Pier }) => {
    let shipStatus = 'Unbooted';

    if (ship.booted && ship.running) {
        shipStatus = 'Running'
    }

    if (ship.booted && !ship.running) {
        shipStatus = 'Stopped'
    }

    return (
        <Tooltip.Root>
            <Tooltip.Trigger className="default-ring">
                <span className="inline-flex items-center">
                    <span className={`inline-flex w-2 h-2 mr-1 rounded-full ${ship.running ? 'bg-green-400' : 'bg-gray-700'}`}></span>
                    <span className="text-gray-500">{shipStatus}</span>          
                </span>
            </Tooltip.Trigger>
            <Tooltip.Content side="top" className="px-3 py-2 text-sm bg-gray-800 rounded">
                <strong className="inline-block mb-1 font-bold">Ports</strong>
                <div className="flex">
                    <span className="mr-3">Interface:</span> 
                    <span className="font-mono ml-auto">{ ship.webPort }</span>
                </div>
                <div className="flex">
                    <span className="mr-3">Loopback:</span>
                    <span className="font-mono ml-auto">{ ship.loopbackPort }</span>
                </div>
                <Tooltip.Arrow className="fill-current text-gray-800"/>
            </Tooltip.Content>
        </Tooltip.Root>
    )
}