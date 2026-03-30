'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'

function Spinner() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const t = useTranslations('forms.contact')
  const tv = useTranslations('forms.contact.validation')

  const schema = z.object({
    nombre: z.string().min(2, tv('nameRequired')),
    email: z.string().email(tv('emailInvalid')),
    mensaje: z.string().min(10, tv('messageTooShort')),
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contacto', ...data }),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          backgroundColor: 'rgba(93,202,165,0.08)',
          border: '1px solid rgba(93,202,165,0.3)',
          padding: '28px',
          textAlign: 'center',
        }}
      >
        <div style={{ color: '#5DCAA5', fontSize: '28px', marginBottom: '10px' }}>✓</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#F2F0E8', marginBottom: '8px' }}>
          {t('successTitle')}
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, color: '#9C9A8E', fontSize: '14px' }}>
          {t('successBody')}
        </p>
        <button className="btn-outline" style={{ marginTop: '20px' }} onClick={() => setStatus('idle')}>
          {t('sendAnother')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {status === 'error' && (
        <div
          style={{
            backgroundColor: 'rgba(226,75,74,0.08)',
            border: '1px solid rgba(226,75,74,0.3)',
            padding: '12px 16px',
            marginBottom: '20px',
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: '#E24B4A',
          }}
        >
          {t('errorBanner')}
        </div>
      )}

      <div className="flex flex-col gap-5">
        <div>
          <label className="form-label" htmlFor="ct-nombre">{t('nameLabel')}</label>
          <input id="ct-nombre" className={`form-input ${errors.nombre ? 'form-input-error' : ''}`} placeholder={t('namePlaceholder')} {...register('nombre')} />
          {errors.nombre && <p className="form-error">{errors.nombre.message}</p>}
        </div>

        <div>
          <label className="form-label" htmlFor="ct-email">{t('emailLabel')}</label>
          <input id="ct-email" type="email" className={`form-input ${errors.email ? 'form-input-error' : ''}`} placeholder={t('emailPlaceholder')} {...register('email')} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div>
          <label className="form-label" htmlFor="ct-mensaje">{t('messageLabel')}</label>
          <textarea
            id="ct-mensaje"
            className={`form-input ${errors.mensaje ? 'form-input-error' : ''}`}
            rows={5}
            placeholder={t('messagePlaceholder')}
            style={{ resize: 'vertical' }}
            {...register('mensaje')}
          />
          {errors.mensaje && <p className="form-error">{errors.mensaje.message}</p>}
        </div>

        <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ justifyContent: 'center' }}>
          {isSubmitting ? (
            <>
              <Spinner />
              {t('sending')}
            </>
          ) : (
            t('submitButton')
          )}
        </button>
      </div>
    </form>
  )
}
