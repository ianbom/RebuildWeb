"use client";

import type { FormEvent } from "react";
import { site, whatsappUrl } from "@/data/site";

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    for (const fieldName of ["name", "message"]) {
      const field = form.elements.namedItem(fieldName) as HTMLInputElement | HTMLTextAreaElement;
      if (!field.value.trim()) {
        field.setCustomValidity(fieldName === "name" ? "Isi nama Anda, bukan hanya spasi." : "Isi pesan Anda, bukan hanya spasi.");
        field.reportValidity();
        field.focus();
        return;
      }
    }
    window.location.assign(whatsappUrl(`Halo TemuWeb, saya ingin menghubungi Anda.\n\nNama: ${name}\nPesan:\n${message}`));
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-labelledby="contact-form-title">
      <span className="eyebrow">Mulai percakapan</span>
      <h2 id="contact-form-title">Apa yang ingin Anda<br />ceritakan?</h2>
      <p>Ceritakan kebutuhan website atau ide digital Anda. Kita mulai dari sini.</p>
      <div className="contact-field">
        <label htmlFor="contact-name">Nama <span>(wajib)</span></label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Nama Anda" required maxLength={120} onInput={(event) => event.currentTarget.setCustomValidity("")} />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Pesan <span>(wajib)</span></label>
        <textarea id="contact-message" name="message" rows={6} placeholder="Saya ingin membuat website untuk..." required maxLength={3000} onInput={(event) => event.currentTarget.setCustomValidity("")} />
      </div>
      {site.whatsappIsDemo && (
        <p className="contact-demo" id="contact-demo">Nomor WhatsApp ini masih demo. Pesan tidak sampai ke TemuWeb. Untuk menghubungi kami, gunakan <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      )}
      <button className="contact-submit" type="submit" aria-describedby={site.whatsappIsDemo ? "contact-delivery contact-demo" : "contact-delivery"}>Kirim ke WhatsApp <span aria-hidden="true">&#8599;</span></button>
      <p className="contact-delivery" id="contact-delivery">Anda akan dialihkan ke WhatsApp dengan nama dan pesan terisi. Tekan Kirim di WhatsApp untuk mengirim pesan. Form ini tidak menyimpan data Anda.</p>
    </form>
  );
}
