import { Rocket, X, Check } from "lucide-react";
import { NotificationRoot } from "./Notification/NotificationRoot";
import { Notification } from "./Notification";

export function Widget() {
  return ( 
    <div className="w-[448px] rounded overflow-hidden">
      <div className="bg-zinc-900 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notifications</span>
        <button className="tex-violet-500 hover:text-violet-400 font-bold text-xs">MARCAR TODAS COMO VISTAS</button>
      </div>

      <div>
        <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você foi convidado para o evento 'Festa de aniversário'." />
            <Notification.Actions >
              <Notification.Action icon={X}  className="bg-emerald-500 hover:bg-emerald-600" />
              <Notification.Action icon={Check} className="bg-violet-500 hover:bg-violet-600 "/>
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você foi convidado para o evento 'Festa de aniversário'." />
          
          </Notification.Root>
        
        </div>
      </div>
    </div>
  );
}