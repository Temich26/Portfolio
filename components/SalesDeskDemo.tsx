import type { ReactNode } from "react";
import { IPhoneFrame, PhoneGallery } from "@/components/IPhoneFrame";
import {
  TelegramChat,
  TgActions,
  TgMessage,
} from "@/components/TelegramChat";

function Chat({
  date,
  children,
}: {
  date: string;
  children: ReactNode;
}) {
  return (
    <IPhoneFrame>
      <TelegramChat
        name="Sales Desk Bot"
        status="бот"
        initials="SD"
        date={date}
      >
        {children}
      </TelegramChat>
    </IPhoneFrame>
  );
}

export function SalesDeskDemo() {
  return (
    <PhoneGallery>
      <Chat date="12 сентября">
        <TgMessage time="10:04">
          <p className="font-semibold">Каталог услуг</p>
          <p className="mt-1">Telegram Mini App под ключ — от 120 000 ₽</p>
          <p>Автоматизация продаж и CRM — от 85 000 ₽</p>
          <p>Чат-бот уведомлений — от 45 000 ₽</p>
        </TgMessage>
        <TgActions
          items={[
            "Mini App под ключ",
            "Автоматизация CRM",
            "Чат-бот уведомлений",
          ]}
        />
      </Chat>

      <Chat date="12 сентября">
        <TgMessage time="10:18">
          <p className="font-semibold">Воронка и статусы сделок</p>
          <p className="mt-1">Новые лиды — 12 сделок / 450 000 ₽</p>
          <p>В работе — 5 сделок / 320 000 ₽</p>
          <p>Согласование — 3 сделки / 180 000 ₽</p>
          <p>Оплачено — 28 сделок / 2 100 000 ₽</p>
        </TgMessage>
        <TgActions items={["Открыть воронку", "Сделки в работе"]} />
      </Chat>

      <Chat date="сегодня">
        <TgMessage time="11:32">
          <p className="font-semibold">Новый заказ #104</p>
          <p className="mt-1">Компания: ООО «Вектор»</p>
          <p>Услуга: Telegram Mini App под ключ</p>
          <p>Сумма: 120 000 ₽</p>
          <p>Статус: Ожидает обработки</p>
        </TgMessage>
        <TgActions items={["Взять в работу", "Связаться с клиентом"]} />
      </Chat>

      <Chat date="сегодня">
        <TgMessage time="11:40">
          Оформление заказа. Отправьте название компании, контакт и Telegram.
        </TgMessage>
        <TgMessage time="11:41" outgoing>
          ООО «Вектор»
        </TgMessage>
        <TgMessage time="11:41" outgoing>
          Иван Петров, @vector_team
        </TgMessage>
        <TgMessage time="11:42">
          Заявка принята. Сумма 120 000 ₽. Менеджер свяжется с вами.
        </TgMessage>
      </Chat>
    </PhoneGallery>
  );
}
