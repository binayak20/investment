import React, { useState } from 'react';
import { ActionIcon, Box, Image, Modal, NavLink, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const languages = [
    { label: "English", flag: "https://eastminer.com/static/country/en-US.png", value: "en-US" },
    { label: "日本", flag: "https://eastminer.com/static/country/ja.png", value: "ja" },
    { label: "한국어", flag: "https://eastminer.com/static/country/kr.png", value: "kr" },
    { label: "العراق", flag: "https://eastminer.com/static/country/ar-IQ.png", value: "ar-IQ" },
    { label: "中國香港", flag: "https://eastminer.com/static/country/zh-HK.png", value: "zh-HK" },
    { label: "Portugues do Brasil", flag: "https://eastminer.com/static/country/pt-br.png", value: "pt-br" },
    { label: "Español", flag: "https://eastminer.com/static/country/es.png", value: "es" },
    { label: "Deutsch", flag: "https://eastminer.com/static/country/de.png", value: "de" },
    { label: "Italiano", flag: "https://eastminer.com/static/country/it.png", value: "it" },
    { label: "ประเทศไทย", flag: "https://eastminer.com/static/country/th.png", value: "th" },
    { label: "فارس", flag: "https://eastminer.com/static/country/fa.png", value: "fa" },
    { label: "Türkiye", flag: "https://eastminer.com/static/country/tr-TR.png", value: "tr-TR" },
    { label: "Pусский", flag: "https://eastminer.com/static/country/ru.png", value: "ru" },
    { label: "Français", flag: "https://eastminer.com/static/country/fr.png", value: "fr" },
    { label: "Tiếng Việt", flag: "https://eastminer.com/static/country/vi.png", value: "vi" },
    { label: "Bahasa Indonesia", flag: "https://eastminer.com/static/country/id.png", value: "id" },
    { label: "Malaysia", flag: "https://eastminer.com/static/country/bm.png", value: "bm" },
];

const LanguageModal = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [currentLang, setCurrentLang] = useState(languages[0])

    const changeLang = (value) => {
        let selected = languages.filter(obj => {
            return obj.value === value
        })
        setCurrentLang(selected[0]);
        close();
    }

    return (
        <>
            <ActionIcon variant="transparent" onClick={open}>
                {
                    !!currentLang
                    ? <img className='language-icon' src={currentLang.flag} alt="us" />
                    : <img className='language-icon' src="https://www.worldometers.info/img/flags/small/tn_us-flag.gif" alt="us" />
                }
            </ActionIcon>
            <Modal opened={opened} onClose={close} title="Change Language" scrollAreaComponent={ScrollArea.Autosize} centered>
                <Box className='language-list'>
                    {
                        languages.map((language, i) => {
                            return (
                                <NavLink
                                    key={`lang-${language.value}`}
                                    label={language.label}
                                    icon={<Image className='lang-flag' size="1rem" src={language.flag} />}
                                    onClick={() => changeLang(language.value)}
                                />
                            )
                        })
                    }
                </Box>
            </Modal>
        </>
    )
}

export default LanguageModal