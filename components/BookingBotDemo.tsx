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
        name="BookingBot"
        status="бот"
        initials="BB"
        date={date}
        avatarClassName="bg-emerald-500 text-[#04120e]"
      >
        {children}
      </TelegramChat>
    </IPhoneFrame>
  );
}

export function BookingBotDemo() {
  return (
    <PhoneGallery>
      <Chat date="15 сентября">
        <TgMessage time="09:12">
          <p className="font-semibold">Выбор даты и слота</p>
          <p className="mt-1">Консультация — 3 500 ₽ · 45 мин</p>
          <p>Диагностика — 4 800 ₽ · 60 мин</p>
          <p>Повторный визит — 2 400 ₽ · 30 мин</p>
          <p className="mt-1">Свободно 16 сентября: 10:00, 11:30, 16:30.</p>
        </TgMessage>
        <TgActions items={["Консультация 11:30", "Диагностика 10:00"]} />
      </Chat>

      <Chat date="16 сентября">
        <TgMessage time="08:05">
          <p className="font-semibold">Календарь администратора</p>
          <p className="mt-1">10:00 Анна К. — подтверждена, 3 500 ₽</p>
          <p>11:30 Павел С. — ожидает, 4 800 ₽</p>
          <p>14:00 Мария Л. — подтверждена, 3 500 ₽</p>
          <p>16:30 Игорь В. — перенесена, 2 400 ₽</p>
        </TgMessage>
        <TgActions items={["Открыть расписание", "Свободные слоты"]} />
      </Chat>

      <Chat date="сегодня">
        <TgMessage time="18:20">
          <p className="font-semibold">Напоминание о визите</p>
          <p className="mt-1">Завтра в 11:30 — консультация.</p>
          <p>Мастер: Екатерина</p>
          <p>Сумма: 3 500 ₽</p>
        </TgMessage>
        <TgActions items={["Подтвердить", "Перенести"]} />
      </Chat>

      <Chat date="сегодня">
        <TgMessage time="12:04">
          <p className="font-semibold">Давно не виделись</p>
          <p className="mt-1">
            Последний визит был 3 недели назад. Завтра в 16:30 свободен слот на
            повторную консультацию — 2 400 ₽.
          </p>
        </TgMessage>
        <TgActions items={["Записаться", "Напомнить позже"]} />
      </Chat>
    </PhoneGallery>
  );
}
